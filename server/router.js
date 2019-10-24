const { Router } = require('express');
const { getSummonerByName } = require('./riot');
const { selectTop, incrementChampion, addUser } = require('./db/index');

const router = Router();

router.get('/champions', (req, res) => {
  selectTop()
    .then((result) => {
      res.send(JSON.stringify(result)); // return array of top champs
    });
});

router.post('/matches', (req, res) => {
  const { username } = req.body;
  // addUser(username).then(() => {
  return getSummonerByName(username)
    .then((matches) => {
      if (addUser(username)) {
        matches.forEach((match) => {
          const id = match.champion;
          incrementChampion(id);
        });
      }
    })
    .then(() => {
      res.end('added to our database!'); // will add info returned from getSumm to db
    })
    .catch((err) => { console.error(err); }); // getChampIdToName on each number passed
  // });
});

module.exports = { router };
