const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'images',
});

connection.connect();

const getImages = (callback) => {
  connection.query('SELECT * FROM deal_images;', (error, results, fields) => {
    if (error) throw error;
    callback(null, results);
  });
};

module.exports = {
  getImages,
};
