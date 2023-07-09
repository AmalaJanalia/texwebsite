const express = require('express');
const router = express.Router();
const Order = require('../models/orders');



//getting users
router.get("/",(req,res)=>{
    Order.find().then((orders)=>{

            res.render('index',{
                title : 'All users',
                orders : orders,
            })

    })


    

});

module.exports= router;