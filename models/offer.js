const mongoose = require('mongoose');
const config = require('../config/database');

//offer schema
const offerSchema = mongoose.Schema({
  seller_name:{
    type: String,
    required: true
  },
  seller_ID:{
    type: String,
    required: true
  },
  buyer_name:{
    type: String,
    required: true
  },
  buyer_ID:{
    type:String,
    required: true
  }
});

const Offer = module.exports = mongoose.model('Offer', offerSchema);

moudle.exports.getOfferByBuyerID = function(id, callback){
    const query = {buyer_ID: id}
    Offer.findById(query, callback);
}
