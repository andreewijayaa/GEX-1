const mongoose = require('mongoose');
const config = require('../config/database');

const orderSchema = mongoose.Schema({
    buyerID : {
        type: String,
        required : true,
    },
    orderNumber: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    orderTrackingNumber: {
        type: String
    },
    orderShippingCompany: {
        type: String
    },
    offersPurchased: {
        type: [Object],
        required: true,
    },
    totalPrice: {
        type: Number,
        required : true,
    },
    totalFeesPrice: {
        type: Number,
        required : true,
    },
    totalOffersPrice: {
        type: Number,
        required : true,
    },
    totalShipPrice: {
        type: Number,
        required : true,
    },
    subtotalPrice: {
        type: Number,
        required : true,
    },
    requestsPurchasedID: {
        type: [String],
        required : true
    },
    stripeChargeID: {
        type: String,
        required : true,
    },
    shippingAddress: {
        type: Object,
        required : true,
    },
    created_at : { type: Date, required: true, default: Date.now }
});

const Order = module.exports = mongoose.model('Order', orderSchema);

module.exports.createOrder = function(newOrder, callback){
    newOrder.save(callback);
}

module.exports.getOrderbyId = function(id, callback){
    Order.findById(id, callback);
}

module.exports.getOrderbyBuyer = function(buyerID, callback){
    const query = {buyerID: buyerID};
    Order.find(query, callback);
}
