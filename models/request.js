const mongoose = require('mongoose');
const config = require('../config/database');

const RequestSchema = mongoose.Schema({
  buyer_ID:{
    type: String,
    required: true
  },
  code:{
    type: String,
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
  request_offers_byID:{
    type:[String]
  }
});

const Request = module.exports = mongoose.model('Request', RequestSchema);

module.exports.createRequest = function(newRequest, callback){
  newRquest.save(callback);
}

module.exports.getRequestbyId = function(id, callback){
    Request.findById(id, callback);
}
