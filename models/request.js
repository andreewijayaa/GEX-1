const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema(
{
	code: 	  { type: Number, required: true },
	title: 	  { type: String, required: true },
	body:     { type: String, required: true },
	date:     { type: Date, required: true, default: Date.now }
});

const Request = module.exports = mongoose.model('Request', RequestSchema);
