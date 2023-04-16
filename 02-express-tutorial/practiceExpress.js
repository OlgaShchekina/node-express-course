const express = require('express');
const path = require('path')
const consoleLog = require('./practice-middleware')

const app = express();

app.use(consoleLog);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname + '/new-public/index.html'));
})

app.get('/sample', (req, res) => {
  res.status(200).send('This is working.');
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
})






