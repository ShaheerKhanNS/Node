const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>My First Page</title><head>`);
    res.write(`<body><h1>Welcome Home</h1></body>`);
    res.write(`</html>`);
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>My First Page</title><head>`);
    res.write(`<body><h1>Welcome to About US</h1></body>`);
    res.write(`</html>`);
  } else if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>My First Page</title><head>`);
    res.write(`<body><h1>Hello From NodeJS Server!</h1></body>`);
    res.write(`</html>`);
  }
});

server.listen(4000, () => {
  console.log("Listnening to port");
});
