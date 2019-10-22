const { champions } = require('../example-data/championArray');
const { Router } = require('express');
const items = require('./db');
const { getSummonerByName } = require('./riot');
// const { champIdToName } = require('../example-data/champions');
const { selectTop, incrementChampion } = require('./db/index');
// getMatchList is also available^
// const path = require('path');
const router = Router();

router.get('/champions', (req, res) => {
  // hardcoded purexpwnage until username added to req.body
//   getSummonerByName('purexpwnage'); // may need to be a promise
// return s
  console.log({ champions });
//   res.redirect('/');
//   res.end('Redirected!');
});

router.post('/matches', (req, res) => {
  const { username } = req.body;
  getSummonerByName(username)
    .then((matches) => {
    //   console.log(matches);
    matches.forEach((match) => {
        let id = match.champion;
        incrementChampion(id);
    });
      // function here to pass in matches, save them to db
    })
    .then((s) => {
      console.log('incremented!');
    }); // getChampIdToName on each number passed
    // keep names in array, pass them to our client
    // then update items arr in client if top champions changes
  res.send('added to our database!'); // will add info returned from getSumm to db
});

router.get('/items', (req, res) => {
  console.log('CONFIRMED');
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

module.exports = { router };
