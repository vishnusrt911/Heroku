var express = require('express');
var router = express.Router();
const passport = require('passport')
let mongoose = require('mongoose');  ()=>{}

// call the user model
let user = require('../models/user');

/* GET Login page. */
  router.get('/', (req, res, next) => {
      res.render('login', {
        title: 'Login'
      });
    });

//LogOut
  router.get('/logout',(req,res)=>{
    console.log("logging out")
    req.logout((err)=>{
        if(err){
            console.log(er)
        }else{
            res.redirect('/login')
        }
    });
  })

  /* POST Login Page */
  router.post('/',passport.authenticate('local',{
    successRedirect:'/business_contact_list',
    failureRedirect:'/login'
}));



  //Get Register Page
  router.get('/register', (req, res, next) => {
    res.render('register', {
      title: 'Register'
    });
  });


  router.post('/register',(req,res,next) =>{
    let newUser =  user({
      "username": req.body.username,
      "password": req.body.password,
      "emailAddress": req.body.emailaddress
      });
      userModel.create(newUser,(err,_)=>{
        if(err){
          console.log(err);
          res.end(err);
          }
          else{
              res.redirect('/login');
          }
      });

  })

  module.exports = router;