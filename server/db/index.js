const mysql = require('mysql');
// const mysql2 = require('mysql2');
const Sequelize = require('sequelize');
const champions = require('../../example-data/championArray');

// const db = new Sequelize('league', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

const options = {
  HOST: '34.66.188.153',
  PORT: '3306',
  DB_NAME: 'db_jade',
  USER_NAME: 'jade',
  USER_PASS: 'u4M7aUzkKgGUpUZG',
  SHELL: "mysql - h 34.66.188.153 - P 3306 - u jade - p'u4M7aUzkKgGUpUZG' db_jade",
  dialect: 'mysql',
};

const db = new Sequelize('league', 'root', '', options);


const Champion = db.define('Champion', {
  id: { primaryKey: true, type: Sequelize.INTEGER },
  quantity: Sequelize.INTEGER,
  championName: Sequelize.STRING,
  // championId: Sequelize.INTEGER,
});

Champion.sync()
  .then(() => {
    console.log('Champions Table Loaded');
  })
  .catch(err => console.error(err));

// select the top 5 champions used
const selectTop = () => {
  return Champion.findAll()
    .then((results) => {
      // console.log(results)
      const result = results.sort((a, b) => {
        return b.quantity - a.quantity;
      });
      return result.slice(0, 5); // return top champions
    })
    .catch(err => console.error(err));
};

const incrementChampion = (id) => {
  Champion.increment('quantity', { where: { id } });
};

// create and call function to add all champions
// to database from function
const addChampions = () => {
  champions.forEach((champion) => {
    const championId = champion.key;
    Champion.create({
      id: championId,
      championId: champion.key,
      championName: champion.name,
      quantity: 0,
    })
      .catch((err) => { console.error(err); });
  });
};
Champion.findAll()
  .then((success) => {
    if (success === undefined || success === null) {
      addChampions();
    } else {
      console.log('Champions Table Up-To-Date');
    }
  });

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
