const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
let reqNumber = 0;
http
  .createServer((req, res) => {
    fs.readFile("");
    if (req.url === "/favicon.ico") {
      res.end();
      return;
    }
    reqNumber++;
    for (let i = 0; i < 5000; i++) {
      console.log(reqNumber + "." + i);
    }
    console.log(reqNumber);
    res.writeHead(200, {
      "Conent-Type": "text/html; charset=utf-8",
    });
    res.end(`ilosc requestow ${reqNumber}`);
  })
  .listen(port, "127.0.0.1");
