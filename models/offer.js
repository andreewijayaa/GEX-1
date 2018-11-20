const mongoose = require('mongoose');
const config = require('../config/database');

//offer schema
const offerSchema = mongoose.Schema({
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
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String
  },
  price:{
    type:Number,
    required:true
  }
});

const Offer = module.exports = mongoose.model('Offer', offerSchema);

module.exports.getOfferBySellerID = function(id, callback){
    const query = {seller_ID: id};
    Offer.findById(query, callback);
}
