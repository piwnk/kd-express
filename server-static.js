const express = require('express');

const app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => (
  res.sendFile('/index.html')
));


app.get('/userform', (req, res) => {
  const { first_name, last_name } = req.query;
  const response = { first_name, last_name }; // oneliner?

  res.end(JSON.stringify(response));
});

const server = app.listen(3000, 'localhost', () => {
  const { address: host, port } = server.address();

  console.log(`Przykładowa aplikacja nasłuchuje na http://${host}:${port}`);
});
