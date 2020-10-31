const express = require("express");
const path = require("path");
const gameRoutes = require("./routes/game");
//tworzenie aplikacji backendowej
const app = express();
//ustawienie nasłuchiwania aplikacji na port 3000 w przeglądarce
app.listen(3000, () => {
  console.log(
    "Server is listening at http://localhost:3000/ Let's play a game"
  );
});
//obsługa plików statycznych
app.use(express.static(path.join(__dirname, "public")));

//mozliwie jak najmniej kodu w app.js, dlatego import z game.js
gameRoutes(app);
