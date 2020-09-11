'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Loading Application's Routes
const index = require('./routes/index-routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

module.exports = app;
