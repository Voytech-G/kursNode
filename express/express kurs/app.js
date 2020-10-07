const express = require("express");

const app = express();
app.listen(3000, () => {
  console.log('Server is listening at http://localhost:3000')
});
// app.get('/', (req) => {
//   // console.log(req.hostname);
//   // console.log(req.ip);
//   // console.log(req.ips);
//   console.log(req.method);
// })
app.get('/hi', () => {
  console.log("Hi, World!");
})
// app.delete("/", (req) => {
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

app.get('/', (req) => {
  console.log('Spis ludzi');
});

app.get('/:id', (req) => {
  console.log('Informacja szczegółowa na temat osoby o ID ' + req.params.id);
});

app.post('/', (req) => {
  console.log('Dodawanie nowej osoby');
})
app.patch('/:id', (req) => {
  console.log('Aktualizacja osoby o ID' + req.params.id);

})
app.delete('/:id', (req) => {
  console.log('Usuwanie osoby o ID ' + req.params.id);
})
// app.get('/hello/new-user', (req) => {
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