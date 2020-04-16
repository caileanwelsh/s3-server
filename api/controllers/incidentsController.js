'use strict';

var mongoose = require('mongoose');
var Incident = mongoose.model('Incident');

exports.list_all_incidents = function(req,res) {
    Incident.find({}, function(err,incident) {
        if(err)
            res.send(err);

        if (res.length > 0)
            res.json(incident);
        else
            res.json("There are no incidents in the database.");    
    });
};

exports.list_an_incident = function(req, res) {
    Incident.find({}, function(err, incident) {
        if(err)
            res.send(err);
        res.json(incident)
    });
};