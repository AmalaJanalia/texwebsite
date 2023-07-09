const mongoose = require('mongoose');

const contactschema ={
    fname : String,
    lname : String,
    mail : String,
    phone : Number,
    msg : String
}

module.exports = mongoose.model("Contacts",contactschema); 