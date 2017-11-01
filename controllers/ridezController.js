const path = require('path');
const express = require('express');
const request = require('request');
const axios = require('axios');
//grab an instance of express router
const router = express.Router();
const mongoose = require('mongoose');

//import the models
const User = require('./../models/UserModel.js');
const Rating = require('./../models/RatingModel.js');

router.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

router.get('/', (req, res) => {
    res.render('root');
});

module.exports = router;