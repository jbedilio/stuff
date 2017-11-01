const express = require('express');
const request = require('request');
//grab an instance of express router
const router = express.Router();
const mongoose = require('mongoose');

//import the models
var User = require('./../models/UserModel.js');
var Rating = require('./../models/RatingModel.js');

router.get('/', (req, res) => {
    res.render('root');
});

module.exports = router;