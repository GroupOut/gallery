const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const filepath = path.join(__dirname, './client/dist');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(filepath));

app.listen(3000, () => console.log('Listening on port 3000!'));
