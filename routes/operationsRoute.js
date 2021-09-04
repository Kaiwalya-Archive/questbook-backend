const express = require('express');
const route = express.Router();

const operationsController = require('../controllers/operationsController.js');

route.get('/', operationsController.getFeed);

module.exports = route;
