const { Router } = require('express');
const { champions } = require('../example-data/championArray');
const items = require('./db');
const { getSummonerByName } = require('./riot');
// const { champIdToName } = require('../example-data/champions');
const { selectTop, incrementChampion } = require('./db/index');
// getMatchList is also available^
// const path = require('path');
const router = Router();

router.get('/champions', (req, res) => {
  selectTop()
    .then((result) => {
      res.send(JSON.stringify(result)); // return array of top champs
    });
});

router.post('/matches', (req, res) => {
  const { username } = req.body;
  return getSummonerByName(username)
    .then((matches) => {
      matches.forEach((match) => {
        const id = match.champion;
        incrementChampion(id);
      });
    })
    .then(() => {
      res.end('added to our database!'); // will add info returned from getSumm to db
    })
    .catch((err) => { console.error(err); }); // getChampIdToName on each number passed
});

// router.get('/items', (req, res) => {
//   console.log('CONFIRMED');
//   items.selectAll((err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

module.exports = { router };
