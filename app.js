const http = require("http");
const routes = require("./route");

const server = http.createServer(routes);

server.listen(4000, () => {
  console.log("Listnening to port");
});
