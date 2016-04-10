var express = require("express");
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

metabaseRouter.get("/item/:n/:k", (req, res) => {
  Item.findOne({
    where: {
      n: req.params.n,
      k: req.params.k
    }
  }).then(item => res.send(item))
    .catch(errorHandler(res));
});

metabaseRouter.post("/item/:n/:k", (req, res) => {
  Item.build({
    n: req.params.n,
    k: req.params.k,
    d: req.body
  }).save()
    .then(item => res.send(item))
    .catch(errorHandler(res));
});

metabaseRouter.put("/item/:n/:k", (req, res) => {


  db.transaction().then(t => {

    Item.update({
      d: req.body,
      u: new Date()
    }, {
      where: {
        n: req.params.n,
        k: req.params.k
      },
      transaction: t
    }).then((rowsAffectedCount, rowsAffected) => {
      if (rowsAffectedCount === 1) {
        t.commit();
        // only one row should be affected
      } else if (rowsAffectedCount === 0) {
        res.sendStatus(httpStatus.NOT_FOUND);
      } else {
        t.rollback();
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
          error: "Unexpectedly updated more than 1 row!"
        });
      }
    });

  }).then(() => {
    res.send(rowsAffected[1]);
  }).catch(errorHandler(res));

});

module.exports = metabaseRouter;