const mongoose = require('mongoose');
const config = require('../config/database');

const RequestSchema = mongoose.Schema({
  buyer_ID:{
    type: String,
    required: true
  },
  code:{
    type: [Number],
    required: true
  },
  title:{
    type:String,
    required: true
  },
  description:{
    type:String,
    required: true
  },
  deadline:{
    type:Date
  },
  request_offers_byID:{
    type:[String]
  },
  offerCount: {
    type:Number,
    default: 0,
    required: true
  }
});

const Request = module.exports = mongoose.model('Request', RequestSchema);

module.exports.createRequest = function(newRequest, callback){
  newRquest.save(callback);
}

module.exports.getRequestbyId = function(id, callback){
    Request.findById(id, callback);
}
