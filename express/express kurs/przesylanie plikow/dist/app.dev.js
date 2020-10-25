"use strict";

var express = require("express");

var path = require('path');

var app = express();
app.listen(3000, function () {
  console.log('Server is listening at http://localhost:3000');
}); // app.get('/', (req) => {
//   // console.log(req.hostname);
//   // console.log(req.ip);
//   // console.log(req.ips);
//   console.log(req.method);
// })

app.get('/hi', function () {
  console.log("Hi, World!");
}); // app.delete("/", (req) => {
//   console.log(req.method);
// })
// app.all("/", (req) => {
//   // console.log(req.method);
//   // console.log(req.originalUrl);
//   // console.log("req.url", req.url);
//   // console.log("req.originalUrl", req.originalUrl);
//   // console.log("req.path", req.path);
//   console.log('req.protocol', req.protocol);
//   console.log('req.secure', req.secure);
//   if (!req.secure) {
//     console.log('Protokol niezabezpieczony');
//   }
// })
// app.all("/", (req) => {
//   // console.log(req.query);
//   console.log(req.get('Referer'));
// })
//Ścieżki w express.js
//stala/sciezka/:zmienna

app.get("/home/about/company", function (req, res) {
  res.redirect('..');
});
app.get("/go_google", function (req, res) {
  //status 301 informuje przegladarke o stałym przekierowaniu i ze nic ciekawego nie bedzie sie działo pod tym adresem
  //jezeli chcemy go zmienic to nalezy wyczyscic cache
  //lepiej korzystac ze statusu 302 bo nie jest stałym przekierowaniem
  res.redirect('https://google.com', 301);
});
app.get("/go_back", function (req, res) {
  res.redirect('back');
});
app.get('/', function (req, res) {
  var fileName = path.join('index2.html');
  res.sendFile(fileName, {
    root: path.join(__dirname, 'static')
  });
});
app.get('/photo', function (req, res) {
  // const fileName = path.join('cover-photo.png');
  var fileName = path.join(__dirname, 'static/cover-photo.png');
  console.log(path.join(__dirname, 'static')); // res.attachment(fileName, {
  //   root: path.join(__dirname, 'static'),
  //   lastModified: false
  // });

  res.download(fileName, "Nowa nazwa pliku.png"); // res.end();
}); // app.get('/', (req, res) => {
//   res.send('<a href="/go_back">Cofnij</a>');
// })
// app.get('/', (req, res) => {
//   // console.log('Spis ludzi');
//   // // res.write("Hello, world!");
//   // // res.end();
//   // // res.send("Hello, world!");
//   // const str = 'Tablica znaków ze znakami';
//   // const ar = str.split(' ');
//   // // res.send(ar);
//   // //formatuje na jsona
//   // // res.json({
//   // //   text: "Witaj, świecie",
//   // //   lifeIsGood: true
//   // // });
//   // //metoda send nie sformatuje tekstu na jsona
//   // res.send("Witaj, świecie");
//   //przekierowanie wejscia na strone
//   // res.location("https://google.pl");
//   //przekierowanie do pliku
//   // res.location("/inna/sciezka");
//   // res.sendStatus(302);
//   //metoda redirect nie wymaga podania statusu, domyslny status to 302 ktory mozna zmienic
//   res.redirect("/inna/sciezka");
// });

app.get('/:id', function (req) {
  console.log('Informacja szczegółowa na temat osoby o ID ' + req.params.id);
});
app.post('/', function (req) {
  console.log('Dodawanie nowej osoby');
});
app.patch('/:id', function (req) {
  console.log('Aktualizacja osoby o ID' + req.params.id);
});
app["delete"]('/:id', function (req) {
  console.log('Usuwanie osoby o ID ' + req.params.id);
}); // app.get('/hello/new-user', (req) => {
//   console.log('Dodawanie nowego użytkownika');
// })
// app.get('/hello/:name', (req) => {
//   // console.log('Powitanie osoby');
//   console.log('Hello ' + req.params.name);
// });
// app.get('/article/:id/:tytul?', (req) => {
//   // console.log('Powitanie osoby');
//   console.log(req.params);
// });