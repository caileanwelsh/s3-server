'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CDM = new Schema({
    POC: {
        type: Number
    }
});

var CAM = new Schema({
    POC: {
        type: Number
    }
});

var Incident = new Schema({
    primaryCDM: {
        type: CDM
    },
    CAMSet: {
        type: [CAM]
    }
});

module.exports = mongoose.model('CDM', CDM);
module.exports = mongoose.model('CAM', CAM);
module.exports = mongoose.model('Incident', Incident);