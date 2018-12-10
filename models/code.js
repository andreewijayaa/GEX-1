//By Roni
const mongoose = require('mongoose');
const config = require('../config/database');

// Code Schema
const CodeSchema = mongoose.Schema({
    code_number:{
      type: Number,
      default: 0
    },
    code_description: {
        type: String,
        required: true
    },
    code_catagory: {
        type: String,
        required: true
    },
    catagory_number: {
        type: Number,
        required: true
    }
});

CodeSchema.index({code_description: 'text'});

const Code = module.exports = mongoose.model('Codes', CodeSchema);


module.exports.getCodebyNumber = function(number, callback){
    Code.findOne(number, callback);
}

module.exports.getCodebyDescription = function(code_description, callback){
    const query = {code_description: code_description};
    Code.findOne(query, callback);
}

module.exports.addCode = function(newCode, callback){
            newCode.save(callback);
}
