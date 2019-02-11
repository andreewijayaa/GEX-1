const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Seller = require('../models/seller');
const Request = require('../models/request');
const Offer = require('../models/offer');
const sendEmail = require('../models/sendEmail');
const upload = require('../services/multer');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const singleUpload = upload.single('image')


// Seller register route that will take in all required information that is required from seller upon registration
// By Roni
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
          // console.log('New email address %s passed format checking.', req.body.email);
          // Add seller to DB if no error
          Seller.addSeller(newSeller, (err, seller) => {
              if(err){
                  res.json({success: false, msg:"Failed to register Seller!"})
              }
              else {
                  // send Seller a verification email
                  // upon successful registration 
                  sendEmail.sendVerificationEmail(seller);
                  res.json({success: true, msg:"Seller Registered!"})
              }
          });
        }
        else{
          // console.log('New email address %s failed format checking.', req.body.email);
          res.json({success: false, msg:"Failed to register Seller! Email is not valid format."})
        }
      }
    });
});

/*
Profile update - By: Omar
Will find the seller by using their id number and update their information accordingly.
*/
router.post('/update', (req, res /*next*/) => {
  let update = {
    first_name: req.body.fName,
    last_name: req.body.lName,
    password: req.body.pass,
    id: req.body.updater_id
  }
  
  Seller.findById(update.id, (err, updated) => {
    if (!update)
      return res.status(405).send({ success: false, message: 'could not retrieve seller info to update.' });
    else {
      updated.first_name = update.first_name;
      updated.last_name = update.last_name;
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(update.password, salt, (err, hash) => {
          if (err) { throw err; }
          updated.password = hash;
          updated.save();
        });
      });
      updated.save();
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

// View all buyer submitted requests for sellers page
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

//route to view offers that a seller has made made by John
//simple method that uses mongoose to find offers that sellers have made
router.get('/viewoffers', (req,res) => {
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ success: false, message:'Must login to view offers.' });

  jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      Seller.findById(decoded.data._id, (err, seller_viewing_offers) => {
        if (seller_viewing_offers.seller_offers_byID != [] ){
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

//route to view active requests made by John
//uses mongoose to find active requets
router.get('/viewactiverequests', (req,res) => {
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ success: false, message:'Must login to view active requests.' });
  jwt.verify(token, config.secret, (err, decoded) => {
    Seller.findById(decoded.data._id, (err, seller_viewing_requests) => {
      Request.find({'_id' :{$in:seller_viewing_requests.open_requests}}, (err, active_requests) => {
        if (err) return res.status(500).send({ success: false, message: 'Could not find any active requests' });
        res.status(200).send(active_requests);
      });
    });
  });
});


//route to view requests the have catergories that belong to 
//made by john (NOT NEEDED)
/*router.get('/viewrequests', (req,res) => {
  var token = req.headers['x-access-token'];

  if (!token) return res.status(401).send({ success: false, message:'Must login to view active requests.' });
  jwt.verify(token, config.secret, (err, decoded) => {
    Request.find({'code': { $in: decoded.data.codes}}, (err, requests) => {
      if (err) return handleError(err);
      return res.status(200).send(requests);
    });
  });
});*/

//This function needs to only be avaible to sellers who are within that code catagory
//also buyers are not allowed to make offers
//also the request id has to be valid
//made by John. Revised by Roni
  router.post('/makeOffer/:id', (req,res,next) =>{
    var id = req.body.request_ID;
    console.log('Request with an offer being added to: ' + id);
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ success: false, message:'Must login to create and offer.' })
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(500).send({success: false, message: 'Failed to authenticate token.'});
      //delete decoded.data.password; //Why are we deleting password here ?? <-Good question I am not sure. I'll comment it out and see if it explodes
      let newOffer = new Offer({
        seller_ID:decoded.data._id,
        //code:req.body.code, //I DONT THINK OFFER NEEDS CODE
        request_ID: req.body.request_ID,
        title:req.body.title,
        description:req.body.description,
        price:req.body.price
      });
      //console.log('created the offer with no problems \n' + newOffer); 
      Seller.findById(decoded.data._id, (err, seller_making_offer) => {
        if (err) return handleError(err);//throws err if search for seller fails
        newOffer.save( (err,post) => {
          if (err) return handleError(err); 
          console.log(post._id);
            if (err) { res.status(500).send({success: false, message: 'Failed to save Offer.'}); }
            seller_making_offer.seller_offers_byID.push(post._id);
            seller_making_offer.open_requests.push(id);//this is the new line added that hopefully fixes the active requests.
            seller_making_offer.save((err) =>{
              if (err) { return next(err); }
              console.log('New Offer made tied to Seller %s', decoded.data._id);
              console.log('Request ID is: ' + id);
              Request.findById(id, (err, request_with_offer) => {
                if (err) return handleError(err);
                console.log('Found request\n' + request_with_offer);
                request_with_offer.request_offers_byID.push(post._id);
                request_with_offer.offerCount++;
                request_with_offer.save((err) =>{
                  if (err){return next(err);}
                  console.log('New Offer made tied to Request %s ', request_with_offer._id);
                });
              });
            });
            res.status(201).json(post);
        });
      });
  });
});

//let's sellers add a code to their account by John
//uses mongoose to add a code and save it to the array of codes for the seller
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


//let's seller's add a description to their account
//code by John
router.post('/addDescription', (req, res) => {
  console.log('add description called');
  var token = req.headers['x-access-token'];

  //if they don't have a token
  if (!token) return res.status(401).send({ success: false, message:'No token provided.' });
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      if (req.body.description == null){
        console.log('No description added');
        return res.status(500).send({ success: false, message: "No description added"});
      }
      console.log('adding this description: ' + req.body.description);
      Seller.findById(decoded.data._id, (err, seller_descipt) => {
        if (err) return handleError(err);
        seller_descipt.set({description: req.body.description});
        seller_descipt.save(function (err, updatedSeller) {
          if (err) return handleError(err);
          return res.status(500).send({ success: true, message: "Attempted to add desciption"});
        });
      });
  });
});

//code to add profile picture to account
//By John
router.post('/profilepicture', function(req, res) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ success: false, message:'No token provided.' });
  jwt.verify(token, config.secret, function(err, decoded) {
    singleUpload(req, res, function(err, some) {
      if (err) {
        return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
      }
      console.log(req.file.location);
      Seller.findById(decoded.data._id, (err, seller_pic) => {
        seller_pic.set({profile_image: req.file.location});
        seller_pic.save();
        return res.json({'imageUrl': req.file.location});
      });
    });
  });
});

//test code
/*router.post('/image-upload', function(req, res) {
  singleUpload(req, res, function(err, some) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }
    console.log(req.file.location);
    return res.json({'imageUrl': req.file.location});
  });
})*/

//code to retrieve profile picture from account
//By John
//router.get('/profilepicture', (req, res) => {
  //anyone can view a profile picture of an account. There is no verification

//});

//let's seller's add billing addres to account
//code by John
router.post('/addBillingAddress', (req, res) => {
  console.log('add billing address called');
  var token = req.headers['x-access-token'];

  //if they don't have a token
  if (!token) return res.status(401).send({ success: false, message:'No token provided.' });
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      Seller.update({_id: decoded.data._id}, {$set : {billing_address: [] }}, function (err, something) {
        if (err) return handleError(err);
        Seller.findById(decoded.data._id, (err, seller_bill) => {
          seller_bill.set({user_account_setup : true});
          if (err) return handleError(err);
          /*var new_address = 
          {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            street_address: req.body.street_address,
            city: req.body.city,
            country: req.body.country,
            state_province: req.body.state_province,
            postal_code: req.body.postal_code
          };*/
          seller_bill.billing_address.push(req.body.first_name);
          seller_bill.billing_address.push(req.body.last_name);
          seller_bill.billing_address.push(req.body.street_address);
          seller_bill.billing_address.push(req.body.city);
          seller_bill.billing_address.push(req.body.country);
          seller_bill.billing_address.push(req.body.state_province);
          seller_bill.billing_address.push(req.body.postal_code);
          seller_bill.save(function (err, updatedSeller) {
            if (err) return handleError(err);
            console.log('Success billing!');
            return res.status(500).send({ success: true, message: "Attempted to add billing address "});
          });
        });
      });
  });
});

//code to remove codes from sellers
//made by John
router.post('/removeCode', (req, res) => {
  var token = req.headers['x-access-token'];

  //if they don't have a token
  if (!token) return res.status(401).send({ success: false, message:'No token provided.' });
  console.log('remove code called');
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      if (req.body.codes == null){
        return res.status(500).send({ success: false, message: "No Codes inputted to delete"});
      }
      //use the update function to call a pullAll operator to reomve the codes
      //console.log('before update is called');
      Seller.findByIdAndUpdate( decoded.data._id, { $pullAll: {codes: [req.body.codes] }}, (error_1, seller_removing_codes) => {
        if (err) return res.status(500).send({ success: false, message: 'Something went wrong when finding seller.' });
        res.json({success: true, msg:"Attempted to remove code from account!"});
      });
      //console.log('after update is called');
  });
});

// A route to get the seller codes that have been added by the sellers
// used to view to sellers what Goods/Services they are offering 
// By Roni
router.get('/getCode', (req, res) => {
  var token = req.headers['x-access-token'];
  var codeList = new Array();
  //if they don't have a token
  if (!token) return res.status(401).send({ success: false, message:'No token provided.' });
  console.log('view code called');
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
      Seller.findById(decoded.data._id, (err, seller_viewing_codes) => {
        if (err) return handleError(err);
        console.log(seller_viewing_codes.codes.length)
        codeList = seller_viewing_codes.codes;
        //if no code were added for the seller
        if (codeList == 'undefined' && codeList == null)
        {
          return res.json({success: true, msg:'None'});
        }
        return res.json({success: true, codeList});
        });
      });
});

//Email Verification - RONI
//Will check the route for a token and search the DB for a user with that 
//token to activate their account
router.post('/confirmEmail/:token', (req, res, next) => {
  Seller.findOne({confirmationToken: req.params.token}, (err, seller) => {
    if(err || seller == null) return res.json({success: false, msg: 'Not able to activate account'});
    var token = req.params.token;
    if(seller.userConfirmed)
    {
      return res.json({success: false, msg: 'Your account is already actived.'});
    }
    jwt.verify(token, config.secret, (err, decoded) => {
      if(err)
      {
        res.json({success:false, msg: 'Activation link has expired.'});

      } else if (!seller) {
        res.json({success:false, msg: 'Activation link has expired.'});
      } else if (seller.userConfirmed) {
        res.json({success:false, msg: 'Acount already activated!'});
      } else {
        // Boolean in seller DB that indicates if user email has been confirmed or not
        seller.temptoken = false;
        seller.userConfirmed = true;
        seller.confirmationToken = undefined;
        seller.save((err) => {
          if(err)
          {
            console.log(err);
          } else {
            //If account Registred Send Email for Email Verification Completed
            sendEmail.emailVerified(seller);
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
                msg:'Account Activated'
              }
            });
          }
        })
      }
    })
  });
})

// Resend Email Verification -- NOT YET USED/TESTED - RONI
router.post('/resend/:token', (req,res, next) =>
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
