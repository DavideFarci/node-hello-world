const http = require("http");

// Imposto la libreria dotenv e la avvio
const dotenv = require("dotenv");
dotenv.config();

/**
 * @type {number}
 */
const port = +process.env.PORT || 3000;

const welcome = [
  `Ogni giorno è una nuova opportunità per cambiare la tua vita in meglio`,
  `Le sfide sono solo opportunità travestite da difficoltà`,
  `Il successo non è mai definitivo, e il fallimento non è mai fatale. Ciò che conta è il coraggio di continuare`,
  `Le tue azioni parlano più forte delle tue parole. Sii la versione migliore di te stesso e ispira gli altri con il tuo esempio`,
  `La felicità non è un destino da raggiungere, ma un modo di viaggiare. Trova gioia nelle piccole cose e vivi ogni momento con gratitudine`,
];

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
