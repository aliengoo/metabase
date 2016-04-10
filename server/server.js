var express = require("express");
var winston = require("winston");
var bodyParser = require("body-parser");

var metabaseRouter = require("./metabase/metabase.router");

var app = express();

app.use(bodyParser.json());

app.use("/api/", metabaseRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  winston.info(`Listening on ${PORT}`);
});