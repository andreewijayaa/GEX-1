const mongoose = require('mongoose');
const config = require('../config/database');

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

const RequestSchema = mongoose.Schema({
  buyer_ID:{
    type: String,
    required: true
  },
  code:{
    type: String,
    required: true
  },
  buyer_first_name:{
    type: String,
    required: true
  },
  buyer_last_name:{
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
  deadline:{
    type:Date,
    required: true
  },
  offers_array:{
    type:[offerSchema]
  }
});

const Request = module.exports = mongoose.model('Request', RequestSchema);

module.exports.createRequest = function(newRequest, callback){
  newRquest.save(callback);
}

module.exports.getRequestbyId = function(id, callback){
    Request.findById(id, callback);
}
