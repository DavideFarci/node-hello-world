// Importo i dati
const data = require("./data");
const welcome = data.welcomePhrases;

const http = require("http");
// Imposto la libreria dotenv e la avvio
const dotenv = require("dotenv");
dotenv.config();

/**
 * @type {number}
 */
const port = +process.env.PORT || 3000;

function htmlResponse(res) {
  const randomPhrase = welcome[Math.floor(Math.random() * welcome.length)];
  res.end(`<h1>${randomPhrase}</h1>`);
}

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
  htmlResponse(res);
});

server.listen(port, function () {
  console.log("Server is running on http://localhost:" + port);
});
