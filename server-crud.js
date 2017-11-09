const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

const readFile = fileName => (
  new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => (
      err ? reject(err) : resolve(data)
    ));
  })
);

const writeFile = (fileName, content) => (
  new Promise((resolve, reject) => {
    fs.writeFile(fileName, content, err => (
      err ? reject(err) : resolve('file updated')
    ));
  })
);


const updateFile = (fileName, suffix) => {
  // read file first
  readFile(fileName)
    .then((data) => {
      // join current content with new suffix
      const content = `${data}\n${suffix}`;
      writeFile(fileName, content)
        .then(message => console.log(message))
        .catch(err => console.log(`Write error: ${err}`));
    })
    .catch(err => console.log(`Read error: ${err}`));
};

// app.use(bodyParser.json());

app.get('/getNote', (req, res) => {
  readFile('./test.json')
    .then(data => res.send(data))
    .catch(error => console.log(`Error: ${error}`));
});

app.post('/updateNote/:note', (req, res) => {
  updateFile('./test.json', req.params.note);
});

const server = app.listen(3000);
