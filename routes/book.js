let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Book = require('../model/book');
/* Get route book list data */
router.get('/',(req,res,next)=>{
    Book.find((err, bookList) =>{
        if(err){
            return console.error(err);
        }else{
            console.log(bookList);
            res.render('book',{title:'Book List',BookList:bookList});
        }
    })
})

module.exports = router;