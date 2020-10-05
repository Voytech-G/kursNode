"use strict";

var express = require("express");

var app = express();
app.listen(3000, function () {
  console.log('Server is listening at http://localhost:3000');
});
app.get('/', function () {
  console.log("Hello, World!");
});
app.get('/hi', function () {
  console.log("Hi, World!");
});