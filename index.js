let http = require("http");
let Url = require("url-parse");
let fs = require("fs");
let events = require("events");
let eventEmitter = new events.EventEmitter();

/* http
  .createServer(function (req, res) {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      return res.end();
    });

    fs.readFile("about.html", function (err, data) {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080); */

/* http
  .createServer(function (req, res) {
    let q = new Url(req.url, true);
    let fileName = "." + q.pathname;
    console.log(q);
    console.log(`Filename: ${fileName} Pathname: ${q.pathname}`);
    console.log(`Req Url: ${req.url}`);

    fs.readFile(fileName, function (err, data) {
      if (err) {
        res.writeHead("404", { "Content-type": "text/html" });
        return res.end("404 Not Found, bitch");
      } else {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(8080); */

http
  .createServer((req, res) => {
    let path = req.url;
    console.log(path);

    if (path === "/") {
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (path === "/about") {
      fs.readFile("about.html", function (err, data) {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (path === "/contact-me") {
      fs.readFile("contact-me.html", function (err, data) {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("404 not found");
    }
  })
  .listen(8080);
