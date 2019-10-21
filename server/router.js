const { Router } = require('express');
const items = require('./db');
const { getSummonerByName, getMatchList } = require('./riot');
// const path = require('path');
const router = Router();

router.get('/matches', (req, res) => {
  // hardcoded purexpwnage until username added to req.body
  getSummonerByName('purexpwnage');
//   res.redirect('/client/dist/index.html');
  console.log('this worked');
  res.end('Redirected!');
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
