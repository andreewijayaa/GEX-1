const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Seller = require('../models/seller');
const Request = require('../models/request');
const Offer = require('../models/offer');
const sendEmail = require('../models/sendEmail');
//Register
router.post('/register',(req,res,next) => {

    //create seller object
    let newSeller = new Seller({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        entity_name: req.body.entity_name,
        position: req.body.position,
        phone_number: req.body.phone_number,
        password: req.body.password,
        confirmationToken: jwt.sign({data: 'seller'}, config.secret, {
          expiresIn: '24h'}) // 1 day
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
        //email format checking
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email))
        {
          console.log('New email address %s passed format checking.', req.body.email);
          Seller.addSeller(newSeller, (err, seller) => {
              if(err){
                  res.json({success: false, msg:"Failed to register Seller!"})
              }
              else {
                  sendEmail.sendVerificationEmail(seller);
                  res.json({success: true, msg:"Seller Registered!"})
              }
          });
        }
        else{
          console.log('New email address %s failed format checking.', req.body.email);
          res.json({success: false, msg:"Failed to register Seller! Email is not valid format."})
        }
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
      //Check email verification
      if(!seller.userConfirmed)
      {
        return res.json({success: false, msg: 'Please Activate your account first.'});
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
// View request
router.get('/view', (req, res) => {
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ success: false, message:'Must login to view requests.' });

  jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      console.log('codes associated with seller' + decoded.data.codes);
      Request.find( {'code' :{$in:decoded.data.codes}}, (err, requests) => {
        if (err) return res.status(500).send({ success: false, message: 'Found no posts matching that code.' });
        res.status(200).send(requests);
      });

    });
});

//route to view offers that a seller has made
router.get('/viewoffers', (req,res) => {
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ success: false, message:'Must login to view offers.' });

  jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      Seller.findById(decoded.data._id, (err, seller_viewing_offers) => {
        if (seller_viewing_offers.seller_offers_byID != []){
          Offer.find({'seller_ID':decoded.data._id} , (err,offers) =>{
            if (err) return res.status(500).send({ success: false, message: 'Could not find offers with ID' });
            res.status(200).send(offers);
          });
        }
        else{
          res.status(500).send({success: false, message: 'There are no offers to view'});
        }
      });
    });
});



//This function needs to only be avaible to sellers who are within that code catagory
//also buyers are not allowed to make offers
//also the request id has to be valid 
  router.post('/makeOffer/:id', (req,res,next) =>{
    var id = req.params.id;
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ success: false, message:'Must login to create and offer.' })
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(500).send({success: false, message: 'Failed to authenticate token.'});
      delete decoded.data.password; //Why are we deleting password here ??
      let newOffer = new Offer({
        seller_ID:decoded.data._id,
        //code:req.body.code, //I DONT THINK OFFER NEEDS CODE
        request_ID: id,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price
      });
      //console.log('created the offer with no problems \n' + newOffer);
      Seller.findById(decoded.data._id, (err, seller_making_offer) => {
        if (err) return handleError(err);
        newOffer.save( (err,post) => {
          console.log(post._id);
            if (err) { res.status(500).send({success: false, message: 'Failed to save Offer.'}); }
            seller_making_offer.seller_offers_byID.push(post._id);
            seller_making_offer.save((err) =>{
              if (err) { return next(err); }
              console.log('New Offer made tied to Seller %s', decoded.data._id);
              console.log('Request ID is: ' + id);
              Request.findById(id, (err, request_with_offer) => {
                if (err) return handleError(err);
                console.log('Found request\n' + request_with_offer);
                request_with_offer.request_offers_byID.push(post._id);
                request_with_offer.save((err) =>{
                  if (err){return next(err);}
                  console.log('New Offer made tied to Request %s ', request_with_offer._id);
                });
              });
            });
            res.status(201).json(post);
        });
      });

    /*newOffer.save( (err,post) => {
        if (err) { return next(err); }
        res.status(201).json(post);
    });*/
  });
});

router.post('/addCode', (req, res) => {
  var token = req.headers['x-access-token'];

  //if they don't have a token
  if (!token) return res.status(401).send({ success: false, message:'No token provided.' });
  console.log('add code called');
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      delete decoded.data.password;
      if (req.body.codes == null){
        return res.status(500).send({ success: false, message: "Code is null"});
      }
      Seller.findById(decoded.data._id, (err, seller_adding_codes) => {
        if (err) return handleError(err);
        seller_adding_codes.codes.push(req.body.codes);
        seller_adding_codes.save((err) =>{
          if (err) { return next(err); }
          res.json({success: true, msg:"Succesfully added code to account!"});
        });
      });
  });
});

//Email Verification
router.post('/confirmEmail/:token', (req, res, next) => {
  console.log(req.params.token);
  Seller.findOne({confirmationToken: req.params.token}, (err, seller) => {
    if(err) throw err;
    var token = req.params.token;

    jwt.verify(token, config.secret, (err, decoded) => {
      if(err)
      {
        res.json({success:false, msg: 'Activation link has expired.'});

      } else if (!seller) {
        res.json({success:false, msg: 'Activation link has expired.'});
      } else if (seller.userConfirmed) {
        res.json({success:false, msg: 'Acount already activated!'});
      } else {
        seller.temptoken = false;
        seller.userConfirmed = true;
        seller.save((err) => {
          if(err)
          {
            console.log(err);
          } else {
            //If account Registred Send Email for Email Verification
            sendEmail.emailVerified(seller);
          }
        })
        res.json({success:true, msg:'Account Activated.'})
      }
    })
  });
})

// Resend Email Verification --NOT TESTED YET
router.post('/resend', (req,res, next) =>
{
  const email = req.body.email;

    Seller.getSellerbyEmail(email, (err, seller) => {
    if(err) throw err;
    if(!seller) {
      return res.json({success: false, msg: 'User not found.'});
    }
    if(seller.userConfirmed) {
      return res.json({success: false, msg: 'Acount is already Activated.'});
    }
    seller.confirmationToken = jwt.sign({data: 'seller'}, config.secret, {
      expiresIn: '24h'});
    seller.save((err) => {
      if(err)
      {
        console.log(err);
      } else {
        // If account Registred Send Email for Email Verification
        sendEmail.sendVerificationEmail(seller);
      }
    });
  });
})

module.exports = router;
