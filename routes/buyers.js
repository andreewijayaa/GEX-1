const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Buyer = require('../models/buyer');
const Request = require('../models/request');

//Register
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
router.post('/login', (req, res, next) => {
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

//Profile
router.get('/profile', (req, res) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ success: false, message:'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      delete decoded.data.password;
      res.status(200).send(decoded);

    });
  });

//Create Request
router.post('/request', (req, res, next) => {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ success: false, message:'Must login to create request.' });

  var request = new Request({
    buyer_ID: req.body.buyer_ID,
    code: req.body.code,
    buyer_first_name: req.body.buyer_first_name,
    buyer_last_name: req.body.buyer_last_name,
    title: req.body.title,
    description:req.body.description
  });
  //console.log('before find by id');
  Buyer.findById(req.body.buyer_ID, (err, buyer_making_request) => {
    //console.log('inside the find by id function');
    if (err) return handleError(err);
    request.save( (err,post) => {
        if (err) { return next(err); }
        //console.log('inside save function');
        buyer_making_request.buyer_requests_byID.push(post._id);
        buyer_making_request.save((err) =>{
          if (err) { return next(err); }
          console.log('New Reuqest made tied to Buyer %s', req.body.buyer_ID);
        });
        res.status(201).json(post);
    });
  });
  /*request.save( (err,post) => {
      if (err) { return next(err); }
      res.status(201).json(post);
  });*/
})

module.exports = router;
