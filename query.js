const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: '',
  database: 'images',
});

connection.connect();

const getImages = (deal, callback) => {
  console.log(deal);
  connection.query(`SELECT * FROM deal_images WHERE id=${deal};`, (error, results, fields) => {
    if (error) throw error;
    callback(null, results);
  });
};

module.exports = {
  getImages,
};
