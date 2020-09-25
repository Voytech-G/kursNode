// //http://numbersapi.com/#random/year

const { default: fetch } = require("node-fetch");

//zadanie1
// const fetch = require("node-fetch");

// //jak ustalić do wpisaliśmy?
// // console.log(process.argv);

// const year = process.argv[2] || Math.floor(Math.random() * 2020);
// console.log(year);
// fetch(`http://numbersapi.com/${year}/year?json`)
//   .then((response) => {
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
//   })
//   .then((data) => console.log(data.text))
//   .catch((error) => console.log("Error", error));

//zadanie2
// `http://numbersapi.com/${number}/${type}?json`

// console.log(process.argv);
// const arg = process.argv[2];
// let type = "";
// if (arg.indexOf("--year") === 0) {
//   console.log("szukamy informacji o roku...");
//   type = "year";
// } else if (arg.indexOf("--math") === 0) {
//   console.log("szukamy informacji o liczbie");
//   type = "math";
// } else if (arg.indexOf("--trivia") === 0) {
//   console.log("szukamy liczby-ciekawostki");
//   type = "trivia";
// }
// const equalSign = arg.search("=");

// if (equalSign === -1) console.log("nie wpisałeś liczby");
// const number = arg.slice(equalSign + 1);
// // if (number === "" || isNaN(Number(number))) {
// //   console.log("to nie jest liczba");
// //   process.exit();
// // }

// fetch(`http://numbersapi.com/${number}/${type}?json`)
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("coś nie halo", res.status);
//     }
//     console.log("Wywala jakiś błąd " + res.status);
//   })
//   .then((res) => console.log(res.text))
//   .catch((err) => console.log("Błąd: ", err));

// `http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json`
//zadanie3 - NBP API - REQUEST
const request = require("request");
const fs = require("fs");

const validCodes = ["usd", "eur", "gbp", "pln", "chf"];
const code = process.argv[2];

const isValid = validCodes.find((currency) => currency == code) ? true : false;
console.log(isValid);

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`;
console.log(url);
request(url, { json: true }, (err, res, body) => {
  if (err) {
    return console.log("Błąd", err);
  }
  if (res.statusCode !== 200) {
    return console.log("coś poszło nie tak, sprawdz url");
  }
  const message = `Średnia cena ${body.currency} w dniu ${body.rates[0].effectiveDate} równa się ${body.rates[0].mid} złotych`;
  fs.appendFile("currencies.txt", message + "\n", (err) => {
    console.log("wynik dodany do pliku");
  });
  console.log(message);
});
