var express = require('express');
var request = require('request');
//grab an instance of express router
var router = express.Router();
var mongoose = require('mongoose');

//import the models
var User = require('./../models/UserModel.js');
var Rating = require('./../models/RatingModel.js');

router.get('/', (req, res) => {
    res.render('index', hbsObject = {data: "Hello Fuckers!"});
});

module.exports = router;