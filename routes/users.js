/*
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

router.post('/confirmEmail/:token', (req, res, next) => {
  Buyer.findOne({temptoken: req.params.token}, (err, buyer) => {
    if(err) throw err;
    var token = req.params.token;

    jwt.verify(token, secret, (err, decoded) => {
      if(err)
      {
        res.json({success:false, msg: 'Activation link has expired.'});
      } else if (!buyer) {
        res.json({success:false, msg: 'Activation link has expired'});
      } else {
        buyer.temptoken = false;
        buyer.userConfirmed = true;
        buyer.save((err) => {
          if(err)
          {
            console.log(err);
          } else {

          }
        });
        res.json({success:true, msg:'Account Activated.'})
      }
    })




    if( token == data.confirmationToken)
    {
      data.userConfirmed = true;
    }
  });
})

module.exports = router;
*/