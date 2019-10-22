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

// select the top 5 champions used
const selectTop = () => {

};
// pass in championId and convert to name here?
const incrementChampion = (id) => {
  Champion.update({ quantity: Sequelize.literal('quantity + 1') }, { where: { id } }) // should increment quantity
    .then((success) => { console.log('Champion Count updated', success); })
    .catch((err) => { console.error(err); });
};
// Champion.sync({ alter: true }) in add to champions?
// create and call function to add all champions
// to database from function
const addChampions = (id) => {
  // add a champion passed in, into the db
  // check if champion exists
  let name = champIdToName(id);
  return Champion.create({
    id,
    name,
  })
    .catch((err) => { console.error(err); });
};
// get array of champions, add to db


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'FILL_ME_IN',
//   database: 'test',
// });


// const selectAll = (callback) => {
//   connection.query('SELECT * FROM items', (err, items) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

module.exports = {
  selectTop,
  incrementChampion,
  addChampions,
};
