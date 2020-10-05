const express = require("express");

const app = express();
app.listen(3000, () => {
  console.log('Server is listening at http://localhost:3000')
});
app.get('/', () => {
  console.log("Hello, World!");
})
app.get('/hi', () => {
  console.log("Hi, World!");
})