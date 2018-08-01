const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./query.js');

const app = express();
const filepath = path.join(__dirname, './client/dist');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(filepath));
app.use('/:id', express.static(filepath));

app.get('/images/:id', (req, res) => {
  db.getImages(req.params.id, (error, images) => {
    if (error) throw error;
    res.send({ data: images });
  });
});

app.get('/app.js', (req, res) => {
  res.sendFile(`${filepath}/bundle.js`);
});

app.listen(3003, () => console.log('Listening on port 3003!'));
