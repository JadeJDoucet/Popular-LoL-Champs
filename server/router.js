const { Router } = require('express');
const items = require('./db');
const { getSummonerByName } = require('./riot');
const { champIdToName } = require('../example-data/champions');
// getMatchList is also available^
// const path = require('path');
const router = Router();

// router.get('/matches', (req, res) => {
//   // hardcoded purexpwnage until username added to req.body
// //   getSummonerByName('purexpwnage'); // may need to be a promise
//   console.log('this worked');
// //   res.redirect('/');
// //   res.end('Redirected!');
// });

router.post('/matches', (req, res) => {
  const { username } = req.body;
  getSummonerByName(username)
    .then((matches) => {
      // function here to pass in matches, save them to db
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
