const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Seller = require('../models/seller');
const Request = require('../models/request');

//Register
router.post('/register',(req,res,next) => {
    
    //create seller object
    let newSeller = new Seller({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        codes: req.body.codes
    });

    //add seller to db
    Seller.addSeller(newSeller, (err, seller) => {
        if(err){
            res.json({success: false, msg:"Failed to register Seller!"})
        }
        else {
            res.json({success: true, msg:"Seller Registered!"})
        }
    });
});

//Authenticate
router.post('/login', (req, res, next) => {
    
    //get email and password from request
    const email = req.body.email;
    const password = req.body.password;

    //search for seller in database
    Seller.getSellerbyEmail(email, (err, seller) => {
      if(err) throw err;
      
      if(!seller){
        return res.json({success: false, msg: 'Seller not found'});
      }
 
      //check password
      Seller.comparePassword(password, seller.password, (err, isMatch) => {
        if(err) throw err;
        
        //provide token in response is login is valid
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
  //to view profile, user must have a JWT-token in the request header
  var token = req.headers['x-access-token'];

  //if they don't have a token
  if (!token) return res.status(401).send({ success: false, message:'No token provided.' });

  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      delete decoded.data.password;
      res.status(200).send(decoded);
     });
  });

router.get('/view', (req, res) => {
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ success: false, message:'Must login to view requests.' });

  jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });

      Request.findOne( {'code':decoded.data.codes}, (err, requests) => {
        if (err) return res.status(500).send({ success: false, message: 'Found no posts matching that code.' });
        res.status(200).send(requests);
      })
      
     });
  });

module.exports = router;