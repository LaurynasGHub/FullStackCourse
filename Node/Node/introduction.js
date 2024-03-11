//local server kurimas node.js
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text-plain');
  res.write('naujas turinys');
  res.end();
});
