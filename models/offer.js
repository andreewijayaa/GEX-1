const mongoose = require('mongoose');
const config = require('../config/database');

//offer schema
const offerSchema = mongoose.Schema({
  seller_first_name:{
    type: String,
    required: true
  },
  seller_last_name:{
    type: String,
    required: true
  },
  seller_ID:{
    type: String,
    required: true
  },
  code:{
    type:String,
    required: true
  },
  request_ID:{
    type:String,
    required:true
  }
});

const Offer = module.exports = mongoose.model('Offer', offerSchema);

module.exports.getOfferBySellerID = function(id, callback){
    const query = {seller_ID: id};
    Offer.findById(query, callback);
}
