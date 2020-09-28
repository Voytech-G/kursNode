"use strict";

var handleData = require("./handleData");

var handleCommand = function handleCommand(_ref) {
  var add = _ref.add,
      remove = _ref.remove,
      list = _ref.list;

  if (add) {
    if (typeof add !== "string" || add.length < 7) {
      return console.log("wpisz nazwę nowego zadania, minimalna dlugosc zadania to 6 znaków".red);
    }

    handleData(1, add);
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log("wpisz nazwę usuwanego zadania. To musi być tekst i musi mieć więcej niż 6 znaków".red);
    }

    handleData(2, remove);
  } else if (list || list === "") {
    handleData(3, null);
  } else {
    console.log("nie rozumiem polecenia. U\u017Cyj --add=\"nazwa zadania, --remove=\"nazwa zadania\" lub opcji --list".red);
  }
};

module.exports = handleCommand;