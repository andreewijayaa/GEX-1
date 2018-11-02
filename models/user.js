/*
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Buyer Schema
const BuyerSchema = mongoose.Schema({
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
    }
});

const Buyer = module.exports = mongoose.model('Buyer', BuyerSchema);

module.exports.getBuyerbyId = function(id, callback){
    Buyer.findById(id, callback);
}

module.exports.getBuyerbyEmail = function(email, callback){
    const query = {email: email}
    Buyer.findOne(query, callback);
}

module.exports.addBuyer = function(newBuyer, callback){
    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(newBuyer.password, salt, (err, hash) => {
            if(err) throw err;
            newBuyer.password = hash;
            newBuyer.save(callback);
        });
    });
}
module.exports.comparePassword = function (inputtedPassword, hash, callback){
    bcrypt.compare(inputtedPassword, hash, (err, isMatch) => {
            if(err) throw err;
            callback(null, isMatch);
        });
}
*/