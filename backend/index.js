const express = require('express');
const path = require('path');
const app = express();
let winston = require('winston');

const cors = require('cors');

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/images', express.static(path.join(__dirname, 'images')));

//
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/config')();
require('./startup/db')();
//

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
	winston.info(`Listening on port ${port}...`)
);

module.exports = server;
