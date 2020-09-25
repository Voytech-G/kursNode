"use strict";

// console.log(process.argv.slice(2, 3));
var parseArgs = require("minimist");

var colors = require("colors");

var fs = require('fs');

var command = parseArgs(process.argv.slice(2, 3));
delete command._; // console.log(command);

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

var handleData = function handleData(type, title) {
  //type = number (1 - add; 2 - remove; 3 - list)
  //title (string || null)
  // const data = fs.readFileSync('datadb.json', 'utf8');
  var data = fs.readFileSync('datadb.json', 'utf8');
  data = data.toString(); //to samo co data.toString

  var tasks = JSON.parse(data);
  console.log(tasks);

  if (type === 1 || type === 2) {
    isExisted = tasks.find(function (task) {
      return task.title === title;
    }) ? true : false;

    if (type === 1 && isExisted) {
      return console.log('takie zadanie juz istnieje'.red);
    } else if (type === 2 && !isExisted) {
      return console.log('nie moge usunac zadania ktore nie istnieje'.red);
    }
  }

  var dataJSON = JSON.stringify(tasks);

  switch (type) {
    case 1:
      console.log('dodaję zadanie');
      var id = tasks.length + 1;
      tasks.push({
        id: id,
        title: title
      });
      fs.writeFileSync('datadb.json', dataJSON);
      console.log("dodaje zadanie: ".concat(title).white.bgGreen);
      break;

    case 2:
      var index = tasks.findIndex(function (task) {
        return task.title === title;
      });
      tasks.splice(index, 1);
      console.log(tasks);
      fs.writeFile('datadb.json', dataJSON, 'utf8', function (err) {
        if (err) throw err;
        console.log("zadanie ".concat(title, " zosta\u0142o usuni\u0119te").white.bgGreen);
      });
      break;

    case 3:
      console.log("List zadan do zrobienia obejmuje ".concat(tasks.length, " pozycji. Do zrobienia masz:"));

      if (tasks.length) {
        tasks.forEach(function (task, index) {
          if (index % 2) return console.log(task.title.green);
          return console.log(task.title.yellow);
        });
      }

      break;
  }
};

handleCommand(command);