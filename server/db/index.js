const mysql = require('mysql');
// const mysql2 = require('mysql2');
// const Sequelize = require('sequelize');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'FILL_ME_IN',
  database: 'test',
});


const selectAll = (callback) => {
  connection.query('SELECT * FROM items', (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};
// select the top 5 champions used
// const selectTop = () =>{
//   connection.query('SELECT ')
// };

module.exports.selectAll = selectAll;
