const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'txt/html' });
    url =req.url;
    if (url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>INDEX Page</h1>");
      } else if (url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>ABOUT Page</h1>");
      } else if (url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>CONTACT Page</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
      }
    
    res.end()
  });
  
  server.listen(5000);