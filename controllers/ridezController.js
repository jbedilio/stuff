var express = require('express');
var request = require('request');
//grab an instance of express router
var router = express.Router();
var mongoose = require('mongoose');



router.get('/', (req, res) => {
    res.render('index', hbsObject = {data: "Hello Fuckers!"});
});

module.exports = router;