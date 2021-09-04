const express = require('express');
const path = require('path');
require('dotenv').config();
const morgan = require('morgan');

const app = express();

if (process.env.DEV_ENVIRONMENT === 'development') {
	app.use(morgan('dev'));
}
app.use('/', require(path.join(__dirname, './routes/operationsRoute.js')));

module.exports = app;
