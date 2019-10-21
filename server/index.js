const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// const items = require('./db');
const { router } = require('./router');

const PORT = process.env.port || 3000; // added || statement for deployment later
const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use('/', router);
app.use(bodyParser.json());
app.use(router);
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Listening on port :${PORT}!`);
});

module.exports = { app };
