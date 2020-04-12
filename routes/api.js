const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const dbHost = 'mongodb://localhost:27017/camselector';

mongoose.connect(dbHost, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are in business");
});

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    dob: Number
});

const User = mongoose.model('User', userSchema);

router.get('/', (req,res) => {
    res.send('api works ish');
});

router.get('/users', (req,res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(["sucker"]);
    });
});

module.exports = router;