const Sequelize = require('sequelize');
const util = require('util');
const champions = require('../../example-data/championArray');

// const options = {
//   host: '34.66.188.153',
//   PORT: 3306,
//   dialect: 'mysql',
// };

// const db = new Sequelize('db_jade', 'jade', 'u4M7aUzkKgGUpUZG', options);

const options = {
  host: 'localhost',
  dialect: 'mysql',
};

const db = new Sequelize('league', 'root', '', options);

const User = db.define('User', {
  id: { primaryKey: true, type: Sequelize.INTEGER },
  username: Sequelize.STRING,
});

const Champion = db.define('Champion', {
  id: { primaryKey: true, type: Sequelize.INTEGER },
  quantity: Sequelize.INTEGER,
  championName: Sequelize.STRING,
  // championId: Sequelize.INTEGER,
});
// Sequelize.sync();
User.sync()
  .then(() => {
    console.log('Users Table loaded');
  })
  .catch(err => console.error(err));

Champion.sync()
  .then(() => {
    console.log('Champions Table Loaded');
  })
  .catch(err => console.error(err));

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
    if (success === undefined || success === null || success.length < 2) {
      addChampions();
    } else {
      console.log('Champions Table Up-To-Date');
    }
  })
  .catch(err => console.error(err));

// select the top 5 champions used
const selectTop = () => {
  return Champion.findAll()
    .then((results) => {
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

const usernameCheck = (username) => {
  // return boolean
  return User.findOne({ where: { username } })
    .then((response) => {
      if (response === undefined || response === null) {
        return false;
      }
      return true;
    });
};
// usernameCheck = util.promisify(usernameCheck);
const addUser = (username) => {
  if (!usernameCheck(username)) {
    return User.create({ username })
      // .then((success) => { return success; })
      .catch(err => console.error(err));
  } // if user doesnt exist create it
  return 'User exists!';
};

// module.exports.addUser = util.promisify(addUser);

module.exports = {
  selectTop,
  incrementChampion,
  addChampions,
  usernameCheck,
  addUser,
};
