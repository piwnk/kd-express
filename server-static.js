const express = require('express');

const app = express();

app.use(express.static('assets'));

app.use((req, res, next) => {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz');
});

app.use('/store', (req, res, next) => {
  console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
  next();
});

// WHY middleware is not displayed if no callback set?
app.get('/', (req, res) => (
  res.sendFile('/index.html')
));

app.get('/userform', (req, res) => {
  const { first_name, last_name } = req.query;
  const response = { first_name, last_name }; // oneliner?

  res.end(JSON.stringify(response));
});

app.get('/store', (req, res) => {
  res.send('To jest sklep');
});

const server = app.listen(3000, 'localhost', () => {
  const { address: host, port } = server.address();

  console.log(`Przykładowa aplikacja nasłuchuje na http://${host}:${port}`);
});
