const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'images',
});

connection.connect();

const getImages = (deal, callback) => {
  console.log(deal);
  connection.query(`select * from deal_images where id=${deal};`, (error, results, fields) => {
    if (error) throw error;
    callback(null, results);
  });
};

module.exports = {
  getImages,
};
