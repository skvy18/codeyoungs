const express = require('express');

const route = express.Router();

const translateController = require('../Every/translate');

route.post('/translate', translateController.getTransatedResponse);

module.exports = route ;