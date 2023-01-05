const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("acarca de");
    return response.end();
  }

  response.write(`
    <h1>Not Found</h1>
    <p>This page not found</p>
    <a href='/'>Volver a la pagina principal</a>
    `);
  response.end();
});

server.listen(3000);

console.log("server is running on port 3000");
