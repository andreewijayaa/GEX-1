const mongoose = require('mongoose');
const config = require('../config/database');

const orderSchema = mongoose.Schema({
    buyerID : {
        type: String,
        required : true,
    },
    status: {
        type: String,
        required: true,
    },
    offersID: {
        type: [String],
        required: true,
    },
    totalPrice: {
        type: Number,
        required : true,
    },
    payment: {
        type: Object,
        required : true,
    },
    shippingAddress: {
        type: Object,
        required : true,
    },
    created_at : { type: Date, required: true, default: Date.now }
});

const Order = module.exports = mongoose.model('Request', orderSchema);

module.exports.createRequest = function(newOrder, callback){
    newOrder.save(callback);
}

module.exports.getOrderbyId = function(id, callback){
    Request.findById(id, callback);
}

module.exports.getOrderbyBuyer = function(buyerID, callback){
    const query = {buyerID: buyerID};
    Order.find(query, callback);
}
