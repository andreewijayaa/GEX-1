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
    orderNumber: {
        type: String,
        required: true
    },
    offersID: {
        type: [String],
        required: true,
    },
    totalPrice: {
        type: Number,
        required : true,
    },
    paymentInfo: {
        type: Object,
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
