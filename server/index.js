const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const items = require('./db');
const { router } = require('./router');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', router);

// app.get('/items', (req, res) => {
//   console.log('CONFIRMED');
//   items.selectAll((err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(PORT, () => {
  console.log(`Listening on port :${PORT}!`);
});

module.exports = { app };
