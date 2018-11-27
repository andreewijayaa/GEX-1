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

//Email Verification
router.post('/:id', (req, res, next) => { 
  var id = req.params.id;
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ success: false, msg:'Must login to view request.' });

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.status(500).send({ success: false, msg: 'Failed to authenticate token.' });

    Request.findById(id, (err, request) => {
      if (err) return res.status(404).send({ success: false, msg: 'Request not found.' });
      var buyer_ID = request.buyer_ID;
      console.log(buyer_ID);
      //We need to make sure other buyers are not able to access their requests
      if(buyer_ID == decoded.data._id)
      {
        Offer.find({'request_ID':request._id} , (err,offers) =>{
          return res.status(200).send({status: 0, request, offers }); //Buyer viewing the request
        });
      } else if (buyer_ID != decoded.data._id){
          Offer.find({'request_ID':request._id} , (err,offers) =>{
          return res.status(200).send({status: 1, request, offers }); // Seller viewing the request
        });
      } else {
        return res.status(500).send({ success: false, msg: 'You are not authorized to view this request.' });
      }
      });
    });
})

module.exports = router;
