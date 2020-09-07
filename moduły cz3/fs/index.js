const fs = require("fs");

// fs.access("./names.txt", fs.constants.F_OK, (err) => {
//   console.log(err ? "file does not exists" : "file exists");
// });
// fs.access("./names.txt", fs.constants.W_OK, (err) => {
//   console.log(err ? "pliku nie mozna zapisywać" : "plik można zapisywać");
// });

//RENAME

// fs.rename("imiona.txt", "imiona.txt", (err) => {
//   if (err) return console.log(err);
//   console.log("nazwa zmieniona");
// });

// fs.renameSync("uzytkownicy.txt", "uzytkownicy.txt");

// try {
//   fs.renameSync("uzytkownicy.txt", "uzytkownicy.txt");
// } catch (err) {
//   console.log(err);
// }

// READDIR

// console.log(fs.readdirSync("../"));

// fs.readdir("./", (err, files) => {
//   if (err) return console.log("Błąd: ", err);
//   console.log("Zawartość", files);

//   // console.log("Błąd: ", err);
//   // console.log("Zawartość", files);
// });

// fs.readFile("imiona.txt", "utf8", (err, data) => {
//   if (err) throw Error(err);
//   console.log(data.toString());
// });

// const names = fs.readFileSync("imiona.txt", "utf8");
// console.log(names);

// let names = "";
// try {
//   names = fs.readFileSync("imiona.txt", "utf8");
// } catch (err) {
//   names = false;
// }

// console.log(names);

// fs.readFile("imiona.txt", "utf8", (err, data) => {
//   if (err) return console.log("nie udało się");

//   fs.writeFile("users.txt", data, (err) => {
//     if (err) console.log(err);
//     else console.log("udało się zapisać w pliku");
//   });
// });
const names = "\njan, kazek";
fs.readFile("imiona", "utf8", (err, data) => {
  console.log(data);
  fs.appendFile("users.txt", names, (err) => {
    if (err) console.log(err);
    else console.log("udało się dolaczyc do pliku");
  });
});
