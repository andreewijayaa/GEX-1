const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Seller Schema
const SellerSchema = mongoose.Schema({
    account_type:{
      type: Number,
      default: 1
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
    entity_name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    codes: {
      type: [Number]
    },
    seller_offers_byID: {
      type: [String]
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
});

const Seller = module.exports = mongoose.model('Seller', SellerSchema);

module.exports.getSellerbyId = function(id, callback){
    Seller.findById(id, callback);
}

module.exports.getSellerbyEmail = function(passedEmail, callback){
    const query = {email: passedEmail}
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
