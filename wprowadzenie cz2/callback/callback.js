// const add = (x, y) => x + y;
// const division = (num1, num2) => num1 / num2;
// //wywołanie funkcji w środku
// const math = (a, b, callback) => {
//   console.log(callback(a, b));
// };

// math(3, 4, add);
// math(3, 4, division);
//opóźnienie, jednowątkowy javascript, asynchroniczna funkcja dzieje się poza event loopem, czyli glowna petla wydarzen
// setTimeout(() => console.log("How are you?"), 2000);
// console.log("Welcome! ");

const fs = require("fs");
//asychroniczne wywołanie metody
fs.readFile("./text.txt", "utf-8", (err, file) => {
  console.log(file);
});
console.log("przed odczytaniem");

//synchroniczne wywołanie metody
// fs.readFileSync("./text.txt", "utf-8", (err, file) => {
//   console.log(file);
// });
// console.log("po odczytaniu");
