const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Seller Schema
const SellerSchema = mongoose.Schema({
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
});

const Seller = module.exports = mongoose.model('Seller', SellerSchema);

module.exports.getSellerbyId = function(id, callback){
    Seller.findById(id, callback);
}

module.exports.getSellerbyEmail = function(email, callback){
    const query = {email: email}
    Seller.findOne(query, callback);
}

module.exports.addSeller = function(newSeller, callback){
    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(newSeller.password, salt, (err, hash) => {
            if(err) {throw err};
            newSeller.password = hash;
            newSeller.save(callback);
        });
    });
}
module.exports.comparePassword = function (inputtedPassword, hash, callback){
    bcrypt.compare(inputtedPassword, hash, (err, isMatch) => {
            if(err) {throw err};
            if(isMatch) {
                return callback(null, isMatch);
            } else {
                return callback();
            }
        });
}