// console.log("jestem w module node");
// module.exports = "zwracam napis z notes.js";
// module.exports = {
//   txt: "zwracam napis z notes.js",
// };
// console.log("exports", exports);
// (EXPORT === module.EXPORTS) === {};
// console.log(exports === module.exports);
// console.log("dirname", __dirname);
// console.log("filename", __filename);
// console.log("require", require);

console.log("module", module);
// setTimeout(() => {
//   console.log("module", module.loaded);
// }, 2000);
module.exports = {
  text: "zwracam coś z modułu notes",
};

//tutaj już nie prowadza do tego samego obiektu
console.log(exports === module.exports);
