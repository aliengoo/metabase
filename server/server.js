var express = require("express");
var winston = require("winston");

var app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  winston.info(`Listening on ${PORT}`);    
});