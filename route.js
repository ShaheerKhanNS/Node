const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>My First Page</title><head>`);
    res.write(`<body><h1>Welcome Home</h1></body>`);
    res.write(`</html>`);
    return res.end();
  } else if (url === "/") {
    const message = fs.readFileSync("./message.txt", "utf-8");

    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>My First Page</title><head>`);
    res.write(
      `<body><p>${message}</P><form action = "/message" method="POST"><input type = "text" name="message"</input><button>Submit</button></body>`
    );
    res.write(`</html>`);
    return res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();

      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>My First Page</title><head>`);
    res.write(`<body><h1>Welcome to About US</h1></body>`);
    res.write(`</html>`);
    return res.end();
  } else if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>My First Page</title><head>`);
    res.write(`<body><h1>Hello From NodeJS Server!</h1></body>`);
    res.write(`</html>`);
    return res.end();
  }
};

module.exports = requestHandler;
