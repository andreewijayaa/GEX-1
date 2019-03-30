const mongoose = require('mongoose');
const config = require('../config/database');

const addressSchema = mongoose.Schema({
    sellerID : {
        type: String,
        required : true,
    },
    country: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required : true,
    },
    city: {
        type: String,
        required : true,
    },
    street1: {
        type: String,
        required : true,
    },
    street2: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    },
    created_at: { type: Date, required: true, default: Date.now }
});

const Address = module.exports = mongoose.model('Address', addressSchema);

module.exports.createAddress = function(newAddress, callback){
    newAddress.save(callback);
}

module.exports.getAddressById = function(id, callback){
    Address.findById(id, callback);
}

module.exports.getAddressBySellerId = function(sellerId, callback){
    const query = {sellerID: sellerId};
    Address.find(query, callback);
}
