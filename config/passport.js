//Create mongoose instance
let mongoose = require('mongoose');  ()=>{}

//Create Passport instance
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

//Create user model instance
const User = require('../models/user');

//Validating the Username and password with Mongo DB
module.exports = authUser =(user,password,done)=>{
    User.findOne({username:user},(err,results)=>{
      if(err){
        return done(null,false);
      }
      if(!results){
        return done(null,false);
      }
      if(results){
        if(results.password!=password){
          return done(null,false)
        }else{
          return done(null,{id:results._id,name:results.username})
        }
      }
    })
  }

//Add the user into current express session
passport.serializeUser( (userObj, done) => { done(null, userObj)});
//Get the user details from the session
passport.deserializeUser((userObj, done) => { done (null, userObj )});