// console.log(process.argv.slice(2, 3));

const parseArgs = require("minimist");
const colors = require("colors");
const fs = require('fs');

const command = parseArgs(process.argv.slice(2, 3));
delete command._;
// console.log(command);

const handleCommand = ({
  add,
  remove,
  list
}) => {
  if (add) {
    if (typeof add !== "string" || add.length < 7) {
      return console.log("wpisz nazwę nowego zadania, minimalna dlugosc zadania to 6 znaków".red);
    }
    handleData(1, add);
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log(
        "wpisz nazwę usuwanego zadania. To musi być tekst i musi mieć więcej niż 6 znaków"
        .red
      );
    }
    handleData(2, remove);
  } else if (list || list === "") {
    handleData(3, null);
  } else {
    console.log(
      `nie rozumiem polecenia. Użyj --add="nazwa zadania, --remove="nazwa zadania" lub opcji --list`.red
    );
  }
};

const handleData = (type, title) => {
  //type = number (1 - add; 2 - remove; 3 - list)
  //title (string || null)
  // const data = fs.readFileSync('datadb.json', 'utf8');
  let data = fs.readFileSync('datadb.json', 'utf8');
  data = data.toString();

  //to samo co data.toString
  const tasks = JSON.parse(data);
  console.log(tasks);

  if (type === 1 || type === 2) {
    isExisted = tasks.find(task => task.title === title) ? true : false;
    if (type === 1 && isExisted) {
      return console.log('takie zadanie juz istnieje'.red);

    } else if (type === 2 && !isExisted) {
      return console.log('nie moge usunac zadania ktore nie istnieje'.red);

    }
  }
  let dataJSON = JSON.stringify(tasks);
  switch (type) {
    case 1:
      console.log('dodaję zadanie');
      const id = tasks.length + 1;
      tasks.push({
        id: id,
        title: title
      });

      fs.writeFileSync('datadb.json', dataJSON);
      console.log(`dodaje zadanie: ${title}`.white.bgGreen);
      break;
    case 2:
      const index = tasks.findIndex(task => task.title === title);
      tasks.splice(index, 1);
      console.log(tasks);
      fs.writeFile('datadb.json', dataJSON, 'utf8', (err) => {
        if (err) throw err;
        console.log(`zadanie ${title} zostało usunięte`.white.bgGreen);

      })
      break;
    case 3:
      console.log(`List zadan do zrobienia obejmuje ${tasks.length} pozycji. Do zrobienia masz:`);
      if (tasks.length) {
        tasks.forEach((task, index) => {
          if (index % 2) return console.log(task.title.green);
          return console.log(task.title.yellow);
        })
      }
      break;
  }
};

handleCommand(command);