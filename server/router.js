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
  return addUser(username).then((response) => {
    console.log('HERES MY RESPONSE', response);
    if (response !== false) {
      return getSummonerByName(username)
        .then((matches) => {
          // usernameCheck(username)
          matches.forEach((match) => {
            const id = match.champion;
            incrementChampion(id);
          });
        })
        .then(() => {
          res.end('added to our database!'); // will add info returned from getSumm to db
        })
        .catch((err) => { console.error(err); }); // getChampIdToName on each number passed
    }
    res.send('User Exists');
  })
    .catch(err => console.error(err));
});
// });

module.exports = { router };
