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
  //code for detecting registering buyer with the same email. By John
  Buyer.findOne({email: req.body.email}, (err, foundBuyer) => {
    if (err) return handleError(err); //if err is encountered while searching for buyer
    if(foundBuyer != null){
      console.log ('Found buyer with email %s', foundBuyer.email);
      res.json({success: false, msg:"Failed to register Buyer! Email already used for another account."})
    }
    else{ //end of code for email detection by John
      console.log('New email used, %s',req.body.email);
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
        console.log('New email address %s passed format checking.', req.body.email);
        Buyer.addBuyer(newBuyer, (err, buyer) => {
            if(err){
                res.json({success: false, msg:"Failed to register Buyer!"})
            }
            else {
                res.json({success: true, msg:"Buyer Registered!"})
            }
        });
      }
      else{
        console.log('New email address %s failed format checking.', req.body.email);
        res.json({success: false, msg:"Failed to register Buyer! Email is not valid format."})
      }
    }
  })
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
            token: `${token}`,
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
