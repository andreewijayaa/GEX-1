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
    //code for detecting seller with same email by John
    Seller.findOne({email: req.body.email}, (err, foundSeller) => {
      if (err) return handleError(err);
      if(foundSeller != null){
        console.log ('Found seller with email %s', foundSeller.email);
        res.json({success: false, msg:"Failed to register Seller! Email already used for another account."})
      }
      else{//end of seller email detection
        console.log('New email used, %s',req.body.email);
        Seller.addSeller(newSeller, (err, seller) => {
            if(err){
                res.json({success: false, msg:"Failed to register Seller!"})
            }
            else {
                res.json({success: true, msg:"Seller Registered!"})
            }
        });
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
            token: `${token}`,
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
  router.get('/profile', (req, res) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ success: false, message:'No token provided.' });

     jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      delete decoded.data.password;
      res.status(200).send(decoded);
     });
  });

module.exports = router;
