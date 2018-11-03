const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Seller = require('../models/seller');

//Seller Register
router.post('/register',(req,res,next) => {
    let newSeller = new Seller({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    });
    Seller.addSeller(newSeller, (err, seller) => {
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

    Seller.getSellerbyEmail(email, (err, seller) => {
      if(err) throw err;
      if(!seller){
        return res.json({success: false, msg: 'Seller not found'});
      }
  
      Seller.comparePassword(password, seller.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data: seller}, config.secret, {
            expiresIn: 604800 // 1 week
          });
  
          res.json({
            success: true,
            token: `Bearer ${token}`,
            seller: {
              id: seller._id,
              first_name: seller.first_name,
              last_name: seller.last_name,
              email: seller.email,
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });
// Profile
router.get('/profile', passport.authenticate('seller-rule', {session:false}), (req, res, next) => {
    res.json({seller: req.first_name});
  });

module.exports = router;