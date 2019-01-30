const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Buyer = require('../models/buyer');
const Request = require('../models/request');
const sendEmail = require('../models/sendEmail');
const Seller = require('../models/seller');

//Register route for buyers by Roni
//Takes in all required information as JSON
router.post('/register',(req,res/*,next*/) => {
    let newBuyer = new Buyer({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      confirmationToken: jwt.sign({data: 'buyer'}, config.secret, {
        expiresIn: '24h'}) // 1 day
  });
  //code for detecting registering buyer with the same email. By John
  Buyer.findOne({email: req.body.email}, (err, foundBuyer) => {
    if (err) return handleError(err); //if err is encountered while searching for buyer
    if(foundBuyer != null){
      console.log ('Found buyer with email %s', foundBuyer.email);
      res.json({success: false, msg:"Failed to register Buyer! Email already used for another account."})
    }
    else{ //end of code for email detection by John
      //console.log('New email used, %s',req.body.email);
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)){
        //console.log('New email address %s passed format checking.', req.body.email);
        //Adding buyer to the DB
        Buyer.addBuyer(newBuyer, (err, buyer) => {
            if(err){
                res.json({success: false, msg:"Failed to register Buyer!"})
            }
            else {
              //after buyer was added to DB, send email for verification - RONI
              sendEmail.sendVerificationEmail(buyer);
              res.json({success: true, msg:"Buyer Registered!"})
            }
        });
      }
      else{
        //console.log('New email address %s failed format checking.', req.body.email);
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
      //Check email verification - RONI
      if(!buyer.userConfirmed)
      {
        return res.json({success: false, msg: 'Please Activate your account first.'});
      }
      //if statement added in by John in case a Seller somehow tries to login as a buyer and gets this far
      if(buyer.account_type != 0)
      {
        return res.json({success: false, msg: 'Your account must be a seller to sign in as a seller.'});
      }//end of statement added in by John
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

// Create Request AKA BUYER SUBMIT REQUEST By Roni
// Route to post request to the DB with the information entered by buyer and also information about the buyer submitting the request
router.post('/request', (req, res, next) => {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ success: false, message:'Must login to create request.' });

  // Must be a buyer logged in to be able to submit a request
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
    // Create the new request object with the following fields
    var request = new Request({
      buyer_ID: decoded.data._id,
      code: req.body.code,
      title: req.body.title,
      description:req.body.description,
      deadline: req.body.deadline
    });
    // console.log('buyers id is %s', decoded.data._id);
    //Find buyer to attach the request ID to the buyer_requests_byID
    Buyer.findById(decoded.data._id, (err, buyer_making_request) => {
      // console.log('inside the find by id function');
      if (err) return handleError(err);
      // Save Request
      request.save( (err,post) => {
          if (err) { return next(err); }
          //console.log('inside save function');
          buyer_making_request.buyer_requests_byID.push(post._id);
          buyer_making_request.save((err) =>{
            if (err) { return next(err); }

            // MATCHING ALGORITHM BY RONI
            // Look for a seller with the same code the buyer has posted a request with
            // find all applicable sellers and email them (Notifcation System) 
            // The email will contain a link to view the Request for sellers 
            Seller.find({'codes': post.code}, (err, applicableSeller) => {
              if (err) { return next(err); }
              // Loop through all the sellers found and email them independtly
              // Might need to find a better way of doing this for when there is a large amount of sellers
              for(i = 0; i < applicableSeller.length; i++ )
              {
                applicableSeller[i].open_requests.push(post._id);
                applicableSeller[i].save((err) =>{
                if (err) { return next(err); }     
                });
                sendEmail.NotifySeller(applicableSeller[i], post._id);
              }
          });
            return res.json({success: true, msg: 'Your request was submitted!'});
          });
      });
    });
});
})

// Retrieve all applicable requests to the logged in buyer
router.get('/request', (req, res, next) => {
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ success: false, message:'Must login to view requests.' });

  jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      Buyer.findById(decoded.data._id, (err, buyer_viewing_requests) => {
        if (err) return handleError(err);

        if (buyer_viewing_requests.buyer_requests_byID != []){
          Request.find({'buyer_ID':decoded.data._id} , (err,requests) =>{
            if (err) return res.status(500).send({ success: false, message: 'Could not find requests with ID' });
            res.status(200).send(requests);
          });
        }
        else{
          res.status(500).send({success: false, message: 'There are no requests to view'});
        }
      });
    });
})





//Email Verification - RONI
//Will check the route for a token and search the DB for a user with that 
//token to activate their account
router.post('/confirmEmail/:token', (req, res, next) => {
  Buyer.findOne({confirmationToken: req.params.token}, (err, buyer) => {
    if(err || buyer == null) return res.json({success: false, msg: 'Not able to activate account'});
    var token = req.params.token;
    
     if(buyer.userConfirmed)
     {
       return res.json({success: false, msg: 'Your account is already actived.'});
     }
    jwt.verify(token, config.secret, (err, decoded) => {
      if(err)
      {
        res.json({success:false, msg: 'Activation link has expired.'});

      } else if (!buyer) {
        res.json({success:false, msg: 'Activation link has expired.'});
      } else if (buyer.userConfirmed) {
        res.json({success:false, msg: 'Acount already activated!'});
      } else {
        // Boolean in buyer DB that indicates if user email has been confirmed or not
        buyer.temptoken = false;
        buyer.userConfirmed = true;
        buyer.confirmationToken = undefined;
        buyer.save((err) => {
          if(err)
          {
            console.log(err);
          } else {
            //If account Registred Send Email for Email Verification Completed
            sendEmail.emailVerified(buyer);
            //Automatically login user after account activation
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
                msg:'Account Activate'
              }
            });
          }
        })
      }
    })
  });
})

// Resend Email Verification -- NOT YET USED/TESTED - RONI
router.post('/resend', (req,res, next) =>
{
  const email = req.body.email;

    Buyer.getBuyerbyEmail(email, (err, buyer) => {
    if(err) throw err;
    if(!buyer) {
      return res.json({success: false, msg: 'User not found.'});
    }
    if(buyer.userConfirmed) {
      return res.json({success: false, msg: 'Acount is already Activated.'});
    }
    buyer.confirmationToken = jwt.sign({data: 'buyer'}, config.secret, {
      expiresIn: '24h'});
    buyer.save((err) => {
      if(err)
      {
        console.log(err);
      } else {
        // If account Registred Send Email for Email Verification
        sendEmail.sendVerificationEmail(buyer);
      }
    });
  });
})

module.exports = router;
