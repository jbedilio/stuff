//requiring mongoose & creating a Schema class with mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//make UserSchema a Schema
var UserSchema = new Schema ({
    //username trimmed required string
    username: {
        type: String,
        trim: true,
        required: 'Please create a user name.'
    },
    //password
    password: {
        type: String,
        trim: true,
        required: 'Please enter a password.'
    },
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
    email: {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid e-mail address']
    },
    created: {
        type: Date,
        default: Date.now
    },
    //smoking
    smoker: {
        type: Boolean,
        defualt: false,
    },
    ratings: [{
        type: Schema.Types.ObjectId,
        ref: 'Rating'
    }]
});

var User = mongoose.model('User', UserSchema)
module.exports = User;