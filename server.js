const http = require("http");

// Imposto la libreria dotenv e la avvio
const dotenv = require("dotenv");
dotenv.config();

/**
 * @type {number}
 */
const port = +process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  res.end(`<h1>${process.env.SALUTO}</h1>`);
});

server.listen(port, function () {
  console.log("Server is running on http://localhost:" + port);
});
