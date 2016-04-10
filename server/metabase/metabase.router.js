var express = require("express");
var lodash = require("lodash");
var winston = require("winston");
var httpStatus = require("http-status");
var Item = require("./item.model");

var metabaseRouter = express.Router();

function errorHandler(res) {
  return error => {
    winston.error(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      error
    })
  };
}

metabaseRouter.get("/item/:namespace/:key", (req, res) => {
  Item.findOne({
    where: {
      namespace: req.params.namespace,
      key: req.params.key
    }
  }).then(item => res.send(item))
    .catch(errorHandler(res));
});

metabaseRouter.post("/item/:namespace/:key", (req, res) => {

  var contentType = req.get("content-type");
  var isJson = contentType === "text/json" || contentType === "application/json";
  console.log(req.body);

  Item.build({
    namespace: req.params.namespace,
    key: req.params.key,
    data: isJson ? JSON.stringify(req.body) : req.body,
    contentType: contentType
  }).save()
    .then(item => res.send(item))
    .catch(errorHandler(res));
});

metabaseRouter.put("/item/:namespace/:key", (req, res) => {
  Item.update({
    data: req.body,
    contentType: req.headers.contentType
  }, {
    where: {
      namespace: req.params.namespace,
      key: req.params.key
    }
  }).then((rowsAffectedCount, rowsAffected) => {
    if (rowsAffectedCount === 1) {
      res.status(httpStatus.OK).send(rowsAffected[1]);
    } else if (rowsAffectedCount === 0) {
      res.sendStatus(httpStatus.NOT_FOUND);
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "Unexpectedly updated more than 1 row!"
      });
    }
  }).catch(errorHandler(res));
});

module.exports = metabaseRouter;