let mongoose = require('mongoose');

// create a model class
let userSchema = mongoose.Schema({
    username: String,
    password: String,
    emailAddress: String
},
{
  collection: "user"
});

module.exports = mongoose.model('user', userSchema);