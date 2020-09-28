"use strict";

var colors = require("colors");

var fs = require('fs');

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
      console.log(tasks);
      tasks = tasks.map(function (task, index) {
        return {
          id: index + 1,
          title: task.title
        };
      });
      console.log(tasks);
      console.log('dodaję zadanie');
      var id = tasks.length + 1;
      tasks.push({
        id: id,
        title: title
      });
      dataJSON = JSON.stringify(tasks);
      fs.writeFileSync('datadb.json', dataJSON);
      console.log("dodaje zadanie: ".concat(title).white.bgGreen);
      break;

    case 2:
      console.log(tasks);
      var index = tasks.findIndex(function (task) {
        return task.title === title;
      });
      tasks.splice(index, 1);
      console.log(tasks);
      tasks = tasks.map(function (task, index) {
        return {
          id: index + 1,
          title: task.title
        };
      });
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

module.exports = handleData;