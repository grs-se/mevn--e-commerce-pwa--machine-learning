const express = require('express');
const app = express();
let winston = require('winston');

const cors = require('cors');

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//
require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/config')();
require('./startup/db')();
//

const port = process.env.PORT || 5000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
