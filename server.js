// dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


// fetches routes
const api = require('./routes/api');

const app = express();

// parser for JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Allows Angular App to communicate with express server
app.use(function(re,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// set API routes
app.use('/', api);

// Get port and store
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));