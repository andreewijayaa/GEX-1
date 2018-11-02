const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Seller = require('../models/seller');

//Seller Register
router.post('/sellers/register',(req,res,next) => {
    let newSeller = new Seller({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });
    Seller.addSeller(newSeller, (err, buyer) => {
        if(err){
            res.json({success: false, msg:"Failed to register Buyer!"})
        }
        else {
            res.json({success: true, msg:"Buyer Registered!"})
        }
    });
});
//Authenticate
router.post('/sellers/authenticate', (req, res, next) => {
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
            user: {
              id: seller._id,
              name: seller.name,
              username: seller.username,
              email: seller.email,
              status: seller.status
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });
// Profile
router.get('/sellers/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({seller: req.seller});
  });

module.exports = router;