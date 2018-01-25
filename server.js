const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  console.log('Otrzymałem żądanie GET do strony głównej');
  res.send('Hello GET');
});

app.get('/list_user', (req, res) => {
  console.log('Otrzymałem żądanie GET do strony /list_user');
  res.send('Strona z listą użytkowników!');
});

app.get('/ab*cd', (req, res) => {
  console.log('Otrzymałem żądanie GET do strony /ab*cd');
  res.send('Wzór pasuje');
});

app.post('/', (req, res) => {
  console.log('Otrzymałem żądanie POST do strony głównej');
  res.send('Hello POST!');
});

app.delete('/del_user', (req, res) => {
  console.log('Otrzymałem żądanie DELETE do strony /del_user');
  res.send('Hello DELETE!');
});

app.get('/:id/:name', (req, res) => {
  const message = `Identyfikator, który został dopisany to ${req.params.id}/${req.params.name}`;
  console.log(message);
  res.send(message);
});

app.use((req, res, next) => {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});

// const server = app.listen(3000, function() {
//    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000')
// })
const server = app.listen(3000);
