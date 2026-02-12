// http
let http = require("http");
http.createServer((re, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  console.log("Hello, Node.js!");
}).listen(8080);
