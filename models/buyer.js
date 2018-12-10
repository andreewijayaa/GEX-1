//By Roni
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Buyer Schema
const BuyerSchema = mongoose.Schema({
    account_type:{
      type: Number,
      default: 0
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userConfirmed: {
        type: Boolean,
        required: true,
        default: false
    },
    confirmationToken: {
        type: String,
        required: true
    },
    buyer_requests_byID: {
      type : [String]
    }
});


const Buyer = module.exports = mongoose.model('Buyer', BuyerSchema);

// Retrieve buyers from DB by ID
module.exports.getBuyerbyId = function(id, callback){
    Buyer.findById(id, callback);
}

// Retrieve buyers from DB by Email
module.exports.getBuyerbyEmail = function(email, callback){
    const query = {email: email};
    Buyer.findOne(query, callback);
}

// Add buyer to DB with encrypted password
module.exports.addBuyer = function(newBuyer, callback){
    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(newBuyer.password, salt, (err, hash) => {
            if(err) {throw err;}
            newBuyer.password = hash;
            newBuyer.save(callback);
        });
    });
}

// compare inputted password to the buyer hashed password
module.exports.comparePassword = function (inputtedPassword, hash, callback){
    bcrypt.compare(inputtedPassword, hash, (err, isMatch) => {
            if(isMatch) {
                return callback(null, isMatch);
            } else {
                return callback();
            }
        });
}
