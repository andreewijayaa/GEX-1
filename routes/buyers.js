const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Buyer = require('../models/buyer');

//Buyer Register
router.post('/register',(req,res/*,next*/) => {
    let newBuyer = new Buyer({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
  });
    Buyer.addBuyer(newBuyer, (err, buyer) => {
        if(err){
            res.json({success: false, msg:"Failed to register Buyer!"})
        }
        else {
            res.json({success: true, msg:"Buyer Registered!"})
        }
    });
});
//Authenticate
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    Buyer.getBuyerbyEmail(email, (err, buyer) => {
      if(err) throw err;
      if(!buyer){
        return res.json({success: false, msg: 'Buyer not found'});
      }
  
      Buyer.comparePassword(password, buyer.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data: buyer}, config.secret, {
            expiresIn: 604800 // 1 week
          });
  
          res.json({
            success: true,
            token: `Bearer ${token}`,
            buyer: {
              id: buyer._id,
              first_name: buyer.first_name,
              last_name: buyer.last_name,
              email: buyer.email,
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });
// Profile
router.get('/profile', passport.authenticate('buyer-rule', {session:false}), (req, res, next) => {
    res.json({buyer: req.first_name});
  });

module.exports = router;