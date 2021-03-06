'use strict';
const express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    incidents = require('../controllers/incidentsController');

    // Allows Angular App to communicate with express server
    router.use(function(req,res,next){
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next()
    })

    // Allows URL and JSON parsing
    router.use(bodyParser.urlencoded({extended:true}));
    router.use(bodyParser.json());

    // routes
    router.get('/incidents', incidents.list_all_incidents);
    router.post('/incidents', incidents.create_an_incident);

    module.exports = router;
