const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./query.js');

const app = express();
const filepath = path.join(__dirname, './client/dist');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(filepath));

app.listen(3003, () => console.log('Listening on port 3003!'));

app.get('/images', (req, res) => {
  db.getImages((error, images) => {
    if (error) throw error;
    res.send({ data: images });
  });
});
