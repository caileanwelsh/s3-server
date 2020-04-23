'use strict';

var mongoose = require('mongoose');
var Incident = mongoose.model('Incident');

exports.list_all_incidents = function(req,res) {
    Incident.find({}, function(err,incidents) {
        if(err)
            res.status(500).json({"error": error, "response": null});
        else
            res.status(200).json({"error": null, incidents: incidents});    
    });
};

exports.create_an_incident = function(req,res) {
    res.json({"message":"You succeeded"});
};

exports.list_an_incident = function(req, res) {
    Incident.find({}, function(err, incident) {
        if(err)
            res.send(err);
        res.json(incident);
    });
};