const express = require('express');

//sukuriam nauja express app (express.js)
const app = express();

//laukiam uzklausu, paleidziam serva
app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/apie', (req, res) => {
  res.sendFile('./views/apie.html', { root: __dirname });
});
