//Adding Cloud MongoDB URL
let URI = "mongodb+srv://vishnursrt:Test123@cluster0.iyav4.mongodb.net/assignment2?retryWrites=true&w=majority";

let mongoose = require('mongoose');

//Connecting Using URI
module.exports = function(){
    mongoose.connect(URI);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })
    return mongodb;
}