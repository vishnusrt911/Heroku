var express = require('express');
var router = express.Router();
const passport = require('passport')

let mongoose = require('mongoose');  ()=>{}
let bus_contact_list = require('../models/business_contact_list');

  //Protect logged in routes
  module.exports =checkAuthenticated=(req,res,next)=>{
    if(req.isAuthenticated()){
        console.log('authentication successfull')
        next();
    }else{
        console.log('redirecting')
        res.redirect('/login')
    }
  }

  //Display Business Contact Lists
  router.get('/',checkAuthenticated,(req,res,next) =>{
    //finding the available business contacts from Mongo
    bus_contact_list.find( (err,list)=>{
      if(err) {return console.error(err);}
      else{
        res.render('contact/bcl',{title :'Business Contact Lists',list});
      }
    });
  });

    //Display Contact Update page
    router.get('/update/:id',checkAuthenticated,(req,res,next) =>{
      let id = req.params.id;

      bus_contact_list.findById(id,(err,contactToUpdate)=>{
          if(err){
              console.error(err);
          }
          else{
              console.log(contactToUpdate);
              res.render('contact/update',{title:'Update Contact',list:contactToUpdate});
          }

      });
    })

    //Update Contact Details
    router.post('/update/:id',checkAuthenticated,(req,res,next) =>{
        let id = req.params.id;
        let updateContact = bus_contact_list({
            "_id": id,
            "contactName" : req.body.contactName,
            "contactNumber" :req.body.contactNumber,
            "contactEmail" : req.body.contactEmailAddress
        });
        bus_contact_list.updateOne({_id:id},updateContact, (err)=>{
            if(err){
                console.log(err);
                res.end(err);
            }
            else{
                res.redirect('/business_contact_list');
            }
          });
      });

      //Delete Contact
      router.get('/delete/:id',checkAuthenticated,(req,res,next) =>{
        let id = req.params.id;
        bus_contact_list.remove({_id:id},(err) =>{
            if(err){
                console.error(err);
                res.end(err);
            }
            else{
                res.redirect('/business_contact_list');
            }
        });
        });

  module.exports = router;