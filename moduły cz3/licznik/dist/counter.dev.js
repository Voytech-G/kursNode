"use strict";

var counter = 0; // module.exports = () => console.log(++counter);

module.exports.add = function (number) {
  counter += number;
  console.log(counter);
};