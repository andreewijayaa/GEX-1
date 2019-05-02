const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Offer = require('../models/offer');
const Request = require('../models/request');
const Seller = require('../models/seller');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// router.get('/:code', function (req, res, next) {
    
//     var code = req.params.code;
//     Request.find({ code : code }, function(err, request_found) {
//     	res.json.send({ success: true, request_found });
//     });
//   });

// Request view function that will take in request ID from URL and return if viewer is authorized and authenticated
// Similar to a portal that will view the request and related offers
// By Roni
// router.post('/:id', (req, res, next) => { 
//   var token = req.headers['x-access-token'];
//   //Get the ID from URL
//   var id = req.params.id;
  
//   if (!token) return res.status(401).send({ success: false, msg:'Must login to view request.' });

//   //Verify the viewing user token
//   jwt.verify(token, config.secret, (err, decoded) => {
//     if (err) return res.status(500).send({ success: false, msg: 'Failed to authenticate token.' });
    
//     // Find the request in the DB
//     Request.findById(id, (err, request) => {
//       if (err) return res.status(404).send({ success: false, msg: 'Request not found.' });
//       //console.log(request);
//       const buyer_ID = request.buyer_ID;
//       //If buyer who made the request is viewing the request
//       if(buyer_ID == decoded.data._id)
//       {
//         Offer.find({'request_ID':request._id} , (err,offers) =>{
//           return res.status(200).send({success: true, status: 0, request, offers }); //Buyer viewing the request
//         });
//       // If a seller if viewing the request, 
//       // At the moment all sellers can view the request if they were to manually know the requestID
//       // But that is a quick fix that can be done since each seller has an array of applicable requestIDs
//       } else if (buyer_ID != decoded.data._id && decoded.data.account_type == 1){
//         Seller.findById(decoded.data._id, (err, seller) => {
//           var codesSeller = seller.codes;
          
//           if(codesSeller.includes(request.code))
//           {
//             Offer.find({'request_ID':request._id} , (err,offers) =>{
//             return res.status(200).send({success: true, status: 1, request, offers }); // Seller viewing the request
//             });
//           } else {
//             return res.json({ success: false, msg: 'You are not authorized to view this request.' });
//           }
//           });
//       } else {
//         return res.json({ success: false, msg: 'You are not authorized to view this request.' });
//       }
//       });
//     });
// })

router.post('/submitEmail', (req,res) => {

  var email = req.body.email;

  if(validateEmail(email))
  {

    console.log(validateEmail(email));
      var data = JSON.stringify([
      {
        "email": email
      }]);

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = false;

      xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        var jsonResponse = JSON.parse(this.responseText);
        if(jsonResponse.new_count == 0 || jsonResponse.new_count == 1) {
          console.log(jsonResponse);
          return res.status(200).send({success: true}); 
        } else if(jsonResponse.errors.length > 0) {
          return res.status(501).send({success: false});
        }
      }
      });
      xhr.open("POST", "https://api.sendgrid.com/v3/contactdb/recipients");
      xhr.setRequestHeader("authorization", "Bearer " + process.env.SENDGRID_API_KEY);
      xhr.setRequestHeader("content-type", "application/json");

      xhr.send(data);


    
  
	
  } else {
    return res.status(501).send({success: false});
  }
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
})
module.exports = router;

