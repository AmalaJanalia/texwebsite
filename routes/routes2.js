const express = require('express');
const router2 = express.Router();


const Contact = require('../models/contacts');

router2.get("/contact",(req,res)=>{
    Contact.find().then((contact)=>{

            res.render('contact',{
                title : 'All users',
                contact : contact,
            })

    })


    

});

module.exports= router2;