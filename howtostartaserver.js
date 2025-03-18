const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const url1 = url.parse(req.url, true);
  console.log(url1);
  switch (url1.pathname) {
    case "/":
      res.end("Home Page");
      break;
    case "/home":
      res.end("Home ");
      break;
    case "/contact":
      res.end("Contact");
      break;
    default:
      res.end("not found!!");
  }
});

server.listen(8002, () => {
  console.log("Server listening");
});
