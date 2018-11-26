const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Offer = require('../models/offer');
const Request = require('../models/request');

router.get('/:code', function (req, res, next) {
    
    var code = req.params.code;
    Request.find({ code : code }, function(err, request) {
    	res.json(request);
    });
  });

module.exports = router;
