const mongoose = require('mongoose');
const orderschema={
    nameProduct : String,
    userName: String,
    unum : Number,
    select : String,
    quantity : Number,
    userAddress : String
}

module.exports = mongoose.model("Orders",orderschema); 