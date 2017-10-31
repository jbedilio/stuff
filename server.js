var express = require('express');
var bp = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');

//setting mongoose to leverage built in ES6 Promises
mongoose.Promise = Promise;

//setting the PORT
var PORT = process.env.PORT || 3000;

//grabbing an instance of express
var app = express();

//serve static content for the app from the "public" directory in the app directory
app.use(express.static('public'));

//setting the instance of express to use body-parser
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect('mongodb://localhost/ridezdb', {useMongoClient: true});
};

var db = mongoose.connection;

db.on('error', error => {
    console.log('Mongoose error: ', error);
});

db.once('open', () => {
    console.log('Mongoose in the hizzy!');
});

//set handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/ridezController.js');

app.use('/', routes);

app.listen(PORT);