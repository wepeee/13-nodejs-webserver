const http = require("http");
const fs = require("fs");
const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("error file");
      res.end();
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const url = req.url;
    if (url === "/about") {
      renderHTML("./about.html", res);
    } else if (url === "/contact") {
      renderHTML("./contact.html", res);
    } else {
      renderHTML("./index.html", res);
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

console.log("tak tambahi");
console.log("orang baru");
