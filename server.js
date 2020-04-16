'use strict';
// dependencies
const express = require('express'),
    app = express(),
    mongoose = require('mongoose');

// connect DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/s3db', { useNewUrlParser: true, useUnifiedTopology: true });
// load models
require('./api/models/models');

// fetches routes
const api = require('./api/routes/index');
// register API routes
app.use('/api', api);

// Get port and store
const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => console.log(`API running on localhost:${port}`));