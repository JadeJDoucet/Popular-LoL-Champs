const mysql = require('mysql');
// const mysql2 = require('mysql2');
const Sequelize = require('sequelize');
const db = new Sequelize('league', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Champion = db.define('Champion', {
  id: { primaryKey: true, type: Sequelize.INTEGER },
  quantity: Sequelize.INTEGER,
  championName: Sequelize.STRING,
});

Champion.sync()
  .then(() => {
    console.log('Champions Added');
  })
  .catch(err => console.error(err));

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

// const addToChampions = () => {

// };

module.exports.selectAll = selectAll;
