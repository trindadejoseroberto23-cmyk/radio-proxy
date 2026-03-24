const express = require('express');
const request = require('request');

const app = express();

app.get('/radio', (req, res) => {
  res.setHeader('Content-Type', 'audio/mpeg');
  request('http://uk6freenew.listen2myradio.com:18982/;').pipe(res);
});

app.get('/', (req, res) => {
  res.send('Proxy rodando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
