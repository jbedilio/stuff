//requiring mongoose & creating a Schema class with mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//make UserSchema a Schema
var UserSchema = new Schema ({
    //firstname is a trimmed required string
    firstname: {
        type: String,
        trim: true,
        required: 'Please enter your first name.'
    },
    //lastname is a trimmed required string
    lastname: {
        type: String,
        trim: true,
        required: 'Please enter your last name.'
    },
    //username trimmed required string
    username: {
        type: String,
        trim: true,
        required: 'Please create a user name.'
    },
    email: {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    //smoking
    smoker: {
        type: Boolean,
        defualt: false,


    }

});

var User = mongoose.model('User', UserSchema)
module.exports = User;