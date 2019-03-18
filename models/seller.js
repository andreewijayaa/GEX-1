// By Roni
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
    description: {
        type: String,
    },
    phone_number: {
        type: String,
        required: true
    },
    codes: {
      type: [Number]
    },
    address: {
        type: [String]
    },
    seller_offers_byID: {
      type: [String]
    },
    open_requests: {
        type: [String]
    },
    user_account_setup: {
        type: [Boolean],
        required: true,
        default: false
    },
    userConfirmed: {
        type: Boolean,
        required: true,
        default: false
    },
    profile_image: {
        type : String,
        required: false,
        deafault: "https://pofileimages.s3.amazonaws.com/155079112060"
    },
    confirmationToken: {
        type: String
    },
    resetPasswordToken: {
        type: String
    },
    stripe: {
        type: Object,
        required: false
    },
    created_at: { type: Date, required: true, default: Date.now }
});

const Seller = module.exports = mongoose.model('Seller', SellerSchema);
// Retrieve Seller by ID
module.exports.getSellerbyId = function(id, callback){
    Seller.findById(id, callback);
}

// Retrieve Seller by Email
module.exports.getSellerbyEmail = function(passedEmail, callback){
    const query = {email: passedEmail}
    Seller.findOne(query, callback);
}

// Add seller to DB with encrypted password
module.exports.addSeller = function(newSeller, callback){
    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(newSeller.password, salt, (err, hash) => {
            if(err) {throw err};
            newSeller.password = hash;
            newSeller.save(callback);
        });
    });
}
module.exports.changePassword = function(seller, callback){
    bcrypt.genSalt(10,(err, salt) => {
        bcrypt.hash(seller.password, salt, (err, hash) => {
            if(err) {throw err};
            seller.password = hash;
            seller.save(callback);
        });
    });
}
// compare inputted password to the seller hashed password
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


/* address schema for later use if we want it
billing_address: {
        first_name: String,
        last_name: String,
        street_address: String,
        city: String,
        country: String,
        state_province: String,
        postal_code: Number
    }*/