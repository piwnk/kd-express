const express = require('express');

const app = express();

app.use(express.static('style'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('main', {
    name: 'Kliknij, żeby zalogować przez google',
    url: '/auth/google',
  });
});

app.get('/auth/google', (req, res) => {
  res.render('login', {

  });
});

app.listen(3000);
app.use((req, res, next) => {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});
