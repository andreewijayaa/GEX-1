var randomstring = require("randomstring");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const Seller = require("../models/seller");
const Address = require("../models/address");
const Request = require("../models/request");
const Offer = require("../models/offer");
const sendEmail = require("../models/sendEmail");
const upload = require("../services/multer");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const singleUpload = upload.single("image");

// Seller register route that will take in all required information that is required from seller upon registration
// By Roni
router.post("/register", (req, res, next) => {
  //create seller object
  let newSeller = new Seller({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    entity_name: req.body.entity_name,
    position: req.body.position,
    phone_number: req.body.phone_number,
    password: req.body.password,
    user_account_setup: [false, false, false, false],
    confirmationToken: jwt.sign({ data: "seller" }, config.secret, {
      expiresIn: "24h"
    }) // 1 day
  });

  //code for detecting seller with same email by John
  Seller.findOne({ email: req.body.email }, (err, foundSeller) => {
    if (err) return handleError(err);
    if (foundSeller != null) {
      // console.log("Found seller with email %s", foundSeller.email);
      res.json({
        success: false,
        msg:
          "Failed to register Seller! Email already used for another account."
      });
    } else {
      //end of seller email detection
      console.log("New email used, %s", req.body.email);
      //email format checking
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)
      ) {
        // console.log('New email address %s passed format checking.', req.body.email);
        // Add seller to DB if no error
        Seller.addSeller(newSeller, (err, seller) => {
          if (err) {
            res.json({ success: false, msg: "Failed to register Seller!" });
          } else {
            // send Seller a verification email
            // upon successful registration
            sendEmail.sellerSendVerificationEmail(seller);
            res.json({ success: true, msg: "Seller Registered!" });
          }
        });
      } else {
        // console.log('New email address %s failed format checking.', req.body.email);
        res.json({
          success: false,
          msg: "Failed to register Seller! Email is not valid format."
        });
      }
    }
  });
});

/*
Profile update - By: Omar
Will find the seller by using their id number and update their information accordingly.
*/
router.post("/update", (req, res) => {
  const io = req.app.get('io');
  let update = {
    first_name: req.body.fName,
    last_name: req.body.lName,
    id: req.body.updater_id
  };

  Seller.findById(update.id, (err, updated) => {
    if (!update)
      return res
        .status(405)
        .send({
          success: false,
          message: "could not retrieve seller info to update."
        });
    else {
      updated.first_name = update.first_name;
      updated.last_name = update.last_name;
      updated.save().then(() => {
        io.emit('updatedSellerProfileInfo');
        res.json({ success: true });
      });
    }
  });
});

//Authenticate
router.post("/login", (req, res, next) => {
  //get email and password from request
  const email = req.body.email;
  const password = req.body.password;

  //search for seller in database
  Seller.getSellerbyEmail(email, (err, seller) => {
    if (err) throw err;

    if (!seller) {
      return res.json({ success: false, msg: "Seller not found" });
    }
    //Check email verification
    if (!seller.userConfirmed) {
      return res.json({
        success: false,
        msg: "Please Activate your account first."
      });
    }
    //check password
    Seller.comparePassword(password, seller.password, (err, isMatch) => {
      if (err) throw err;

      //provide token in response is login is valid
      if (isMatch) {
        const token = jwt.sign({ data: seller }, config.secret, {
          expiresIn: 86400 // 1 Day
        });

        res.json({
          success: true,
          token: `${token}`,
          seller: {
            id: seller._id,
            first_name: seller.first_name,
            last_name: seller.last_name,
            email: seller.email
          }
        });
      } else {
        return res.json({ success: false, msg: "Wrong password" });
      }
    });
  });
});

// Profile
router.get("/profile", (req, res) => {
  var token = req.headers["x-access-token"];

  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must be logged in to access profile info." });

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    Seller.findById(decoded.data._id, (err, seller_found) => {
      if (err) handleError(err);
      res.status(200).send({ success: true, seller_found });
    });
  });
});

// View all buyer submitted requests for sellers page
router.get("/view", (req, res) => {
  var token = req.headers["x-access-token"];

  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must login to view requests." });

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    //console.log('codes associated with seller' + decoded.data.codes);
    Request.find({ code: { $in: decoded.data.codes } }, (err, requests) => {
      if (err)
        return res
          .status(500)
          .send({
            success: false,
            message: "Found no posts matching that code."
          });
      res.status(200).send(requests);
    });
  });
});

//route to view offers that a seller has made made by John
//simple method that uses mongoose to find offers that sellers have made
router.get("/viewoffers", (req, res) => {
  var token = req.headers["x-access-token"];

  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must login to view offers." });

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    Seller.findById(decoded.data._id, (err, seller_viewing_offers) => {
      if (seller_viewing_offers.seller_offers_byID != []) {
        Offer.find({ seller_ID: decoded.data._id }, (err, offers) => {
          if (err)
            return res
              .status(500)
              .send({
                success: false,
                message: "Could not find offers with ID"
              });
          res.status(200).send({ success: true, offers });
        });
      } else {
        res
          .status(500)
          .send({ success: false, message: "There are no offers to view" });
      }
    });
  });
});

//route to fetch sellers stripe id data to be transfered during checkout.
router.get("/retrieveStripeId", (req, res) => {
  Seller.findById(decoded.data._id, (err, seller_stripe_info) => {

  });
});

//funciton to delete offers
//By John
router.post("/deleteoffer", function(req, res) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });
  jwt.verify(token, config.secret, function(err, decoded) {
    Offer.findById(req.body.offer_id, (err, offer_being_deleted) => {
      if (offer_being_deleted.seller_ID != decoded.data._id) {
        return res.status(500).send({
          success: false,
          message: "You must be the owner of this offer to delete it"
        });
      } else {
        /*Offer.findByIdAndRemove(req.body.offer_id, (err, wewlad) => {
          if (err) {
            res.send("Error deleting request")
          }
          return res.json(wewlad);
        });*/
        return res.status(500).send({
          success: true,
          message: "A thing to pretend success for testing"
        });
      }
    });
  });
});

//route to view active requests made by John
//uses mongoose to find active requets
router.get("/viewactiverequests", (req, res) => {
  var token = req.headers["x-access-token"];

  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must login to view active requests." });
  jwt.verify(token, config.secret, (err, decoded) => {
    Seller.findById(decoded.data._id, (err, seller_viewing_requests) => {
      Request.find(
        { _id: { $in: seller_viewing_requests.open_requests } },
        (err, active_requests) => {
          if (err)
            return res
              .status(500)
              .send({
                success: false,
                message: "Could not find any active requests"
              });
          res.status(200).send({ success: true, active_requests });
        }
      );
    });
  });
});

// Still needs to be worked on.
router.get("/getAddress", (req, res) => {
  var token = req.headers["x-access-token"];

  if (!token)
  return res
    .status(401)
    .send({ success: false, message: "Must login to get address." });

    jwt.verify(token, config.secret, (err, decoded) => {
      Address.getAddressBySellerId(decoded.data._id, (err, seller_viewing_requests) => {
        Request.find(
          { _id: { $in: seller_viewing_requests.open_requests } },
          (err, active_requests) => {
            if (err)
              return res
                .status(500)
                .send({
                  success: false,
                  message: "Could not find any address for this seller"
                });
            res.status(200).send({ success: true, active_requests });
          }
        );
      });
    });
});

// // This will be used to check account setup - By Roni
// router.post('/accountSetup', (req,res) => {
//   var token = req.headers['x-access-token'];
//   if (!token) return res.status(401).send({ success: false, message:'Must login to setup account.' });
//   jwt.verify(token, config.secret, (err, decoded) => {
//     Seller.findById(decoded.data._id,{$exists: decoded.data.user_account_setup} , (err, sellerSettingUp) => {
//       const stepIndex = req.body.step;
//       if(stepIndex >= 0 && stepIndex <= 2 && user_account_setup[stepIndex] == false) {
//         sellerSettingUp.user_account_setup[stepIndex] = true;
//         sellerSettingUp.save((err) => {
//           if(err) return res.status(500).send({ success: false, message: 'Step ' + stepIndex + ' did not save!' });
//           return res.status(200).send({ success: false, message: 'Step ' + stepIndex + ' successfully completed!' });
//         });
//       } else {
//         return res.status(500).send({ success: false, message: 'Step ' + stepIndex + ' did not save!' });
//       }
//     });
//   });
// });
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
router.post("/makeOffer", (req, res, next) => {
  const io = req.app.get('io');
  var token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must login to create and offer." });
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    //delete decoded.data.password; //Why are we deleting password here ?? <-Good question I am not sure. I'll comment it out and see if it explodes

    let newOffer = new Offer({
      seller_ID: decoded.data._id,
      request_ID: req.body.request_ID,
      title: req.body.title,
      offerStatus: "Pending",
      description: req.body.description,
      price: req.body.price,
      shippingPrice: req.body.shipPrice
    });
    // Check if request is expired
    Request.findById(req.body.request_ID, (err, requestBeingOffered) => {
      if (err)
        return res
          .status(500)
          .send({ success: false, message: "Request not found." });
      var Today = new Date();
      // console.log(requestBeingOffered.deadline < Today);
      if (requestBeingOffered.deadline < Today) {
        return res
          .status(201)
          .send({ success: false, message: "Request has expired." });
      }
      //console.log('created the offer with no problems \n' + newOffer);
      Seller.findById(decoded.data._id, (err, seller_making_offer) => {
        if (err || seller_making_offer == null)
          return res
            .status(404)
            .send({ success: false, message: "Not able to locate seller." });
        //console.log(seller_making_offer);
        if (seller_making_offer.stripe == null)
          return res
            .status(500)
            .send({
              success: false,
              message: "Must be registered with Stripe to submit offer."
            });
        // Saving the new offer
        newOffer.save((err, post) => {
          if (err) return res.json(err);
          //console.log(post._id);
          if (err) {
            res
              .status(201)
              .send({ success: false, message: "Failed to save Offer." });
          }
          seller_making_offer.seller_offers_byID.push(post._id);
          seller_making_offer.open_requests.push(newOffer.request_ID); //this is the new line added that hopefully fixes the active requests.
          seller_making_offer.save(err => {
            if (err) {
              return next(err);
            }
            //console.log('New Offer made tied to Seller %s', decoded.data._id);
            Request.findById(newOffer.request_ID, (err, request_with_offer) => {
              if (err) return handleError(err);
              //console.log('Found request\n' + request_with_offer);
              request_with_offer.request_offers_byID.push(post._id);
              request_with_offer.offerCount++;
              request_with_offer.save().then(() => {
                io.emit('updatedSellerProfileInfo');
                return res.status(200).send({ success: true, message: 'The offer was submitted successfully!' });
              });
            });
          });
        });
      });
    });
  });
});

// Connect Stripe account to Seller account
router.post("/authenticateStripe", (req, res, next) => {
  const io = req.app.get('io');
  var token = req.headers["x-access-token"]; // Get Token
  if (!token)
    return res.status(401).send({ success: false, message: "Invalid Access." }); //Invalid Token

  //Verify Logged in token
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate user." });
    // console.log('decoded ID: ' +decoded.data._id);
    // console.log('State: ' + req.body.state);
    // console.log('Code: ' + req.body.code);
    //Make sure Stripe returned state is the same as User ID - Updating correct seller Stripe_ID
    if (req.body.state !== decoded.data._id) {
      return res
        .status(500)
        .send({ success: false, message: "Not able to connect with Stripe." });
    }
    // Data to be sent to stripe
    var postData = {
      client_secret: process.env.CLIENT_SECRET,
      code: req.body.code,
      grant_type: "authorization_code"
    };
    // CURL POST request to STRIPE
    var request = require("request");
    var clientServerOptions = {
      uri: "https://connect.stripe.com/oauth/token",
      body: JSON.stringify(postData),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };
    // MAKING THE STRIPE REQUEST
    request(clientServerOptions, function(error, response) {
      // REQUEST FAILED
      if (err)
        return res
          .status(500)
          .send({ success: false, msg: "Request to Stripe failed." });

      // Parse the returned stripe call to a Json Object
      var bodyObject = JSON.parse(JSON.parse(JSON.stringify(response.body)));

      if (bodyObject.stripe_user_id !== undefined) {
        //Update seller account setup - We know that seller has added stripe
        Seller.findById(decoded.data._id, (err, seller_adding_stripe) => {
          seller_adding_stripe.user_account_setup.set(3, true);
          seller_adding_stripe.save().then(() => {
            io.emit('updatedSellerProfileInfo');
          });
        });
        // Update the stripe_id with the applicate seller
        Seller.updateOne(
          { _id: decoded.data._id },
          { $set: { stripe: bodyObject } },
          (err, updatingStripe) => {
            if (err)
              return res
                .status(500)
                .send({
                  success: false,
                  msg: "Not able to connect with Stripe."
                });
            return res
              .status(200)
              .send({
                success: true,
                msg: "Stripe account connected successfully!"
              });
          }
        );
      } else {
        return res
          .status(200)
          .send({ success: false, msg: "Stripe connection was lost." });
      }
    });
  });
});

//let's sellers add a code to their account by John
//uses mongoose to add a code and save it to the array of codes for the seller
router.post("/addCode", (req, res) => {
  var token = req.headers["x-access-token"];

  //if they don't have a token
  if (!token)
    return res.status(401).send({ success: false, message: "Invalid Access." });
  //console.log('add code called');
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate user." });
    delete decoded.data.password;
    if (req.body.codes == null) {
      return res.status(500).send({ success: false, message: "Code is null" });
    }
    Seller.findById(decoded.data._id, (err, seller_adding_codes) => {
      if (err) return handleError(err);
      seller_adding_codes.codes = req.body.codes;
      seller_adding_codes.user_account_setup.set(0, true);
      seller_adding_codes.save(err => {
        if (err) {
          return next(err);
        }
        return res.json({
          success: true,
          msg: "Goods/Services Updated Successfully!"
        });
      });
    });
  });
});

//let's seller's add a description to their account
//code by John
router.post("/addDescription", (req, res) => {
  //console.log('add description called');
  var token = req.headers["x-access-token"];

  //if they don't have a token
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    if (req.body.description == null) {
      //console.log('No description added');
      return res
        .status(500)
        .send({ success: false, message: "No description added" });
    }
    //console.log('adding this description: ' + req.body.description);
    Seller.findById(decoded.data._id, (err, seller_descipt) => {
      if (err) return handleError(err);
      seller_descipt.set({ description: req.body.description });
      seller_descipt.user_account_setup.set(1, true);
      seller_descipt.save(function(err, updatedSeller) {
        if (err) return handleError(err);
        return res.json({
          success: true,
          message: "Attempted to add desciption"
        });
      });
    });
  });
});

router.post("/addAddress", (req, res) => {
  var newAddress = new Address ({
    sellerID: req.body.seller_id,
    country: req.body.country,
    zip: req.body.zip,
    state: req.body.state,
    city: req.body.city,
    street1: req.body.street_1,
    street2: req.body.street_2,
    company: req.body.company
  });

  var token = req.headers["x-access-token"];

  //if they don't have a token
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });

  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });

    Seller.findById(req.body.seller_id, (err, seller) => {
      if (err) return handleError(err);
      Address.createAddress(newAddress, (err, address) => {
        if (err) {
          res.json({ success: false, msg: "Failed to add address to address schema!" });
        } else {
          seller.user_account_setup.set(2, true);
          seller.save(function(err, updatedSeller) {
            if (err) return handleError(err);
            return res.json({
              success: true,
              message: "Address added and seller account updated."
            })
          });
        }
      });
    });
  });
});

//code to add profile picture to account
//By John
router.post("/profilepicture", function(req, res) {
  const io = req.app.get('io');
  var token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });
  jwt.verify(token, config.secret, function(err, decoded) {
    singleUpload(req, res, function(err, some) {
      if (err) {
        return res
          .status(422)
          .send({
            errors: [{ title: "Image Upload Error", detail: err.message }]
          });
      }
      //console.log(req.file.location);
      Seller.findById(decoded.data._id, (err, seller_pic) => {
        seller_pic.set({ profile_image: req.file.location });
        seller_pic.save().then(() => {
          io.emit('updatedSellerProfileInfo');
        });
        return res.json({ imageUrl: req.file.location });
      });
    });
  });
});

//test code (WAS USED FOR DEBUGGING)
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
// router.post("/addAddress", (req, res) => {
//   //console.log('add billing address called');
//   var token = req.headers["x-access-token"];

//   //if they don't have a token
//   if (!token)
//     return res
//       .status(401)
//       .send({ success: false, message: "No token provided." });
//   //otherwise verify the token and return user data in a response
//   jwt.verify(token, config.secret, function(err, decoded) {
//     if (err)
//       return res
//         .status(500)
//         .send({ success: false, message: "Failed to authenticate token." });
//     Seller.update(
//       { _id: decoded.data._id },
//       { $set: { billing_address: [] } },
//       function(err, something) {
//         if (err) return handleError(err);
//         Seller.findById(decoded.data._id, (err, seller_bill) => {
//           //seller_bill.set({user_account_setup : true});
//           if (err) return handleError(err);
//           var seller_business_address = 
//           {
//             sellerID: req.body.seller_id,
//             street_address1: req.body.street_1,
//             street_address2: req.body.street_2,
//             city: req.body.city,
//             country: req.body.country,
//             state_province: req.body.state,
//             postal_code: req.body.zip,
//             company: req.body.company
//           };
//           seller_bill.billing_address.push(req.body.first_name);
//           seller_bill.billing_address.push(req.body.last_name);
//           seller_bill.billing_address.push(req.body.street_address);
//           seller_bill.billing_address.push(req.body.city);
//           seller_bill.billing_address.push(req.body.country);
//           seller_bill.billing_address.push(req.body.state_province);
//           seller_bill.billing_address.push(req.body.postal_code);
//           seller_bill.save(function(err, updatedSeller) {
//             if (err) return handleError(err);
//             //console.log('Success billing!');
//             return res.json({
//               success: true,
//               message: "Attempted to add billing address "
//             });
//           });
//         });
//       }
//     );
//   });
// });

//code to remove codes from sellers
//made by John
router.post("/removeCode", (req, res) => {
  var token = req.headers["x-access-token"];

  //if they don't have a token
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });
  // console.log('remove code called');
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    if (req.body.codes == null) {
      return res
        .status(500)
        .send({ success: false, message: "No Codes inputted to delete" });
    }
    //use the update function to call a pullAll operator to reomve the codes
    //console.log('before update is called');
    Seller.findByIdAndUpdate(
      decoded.data._id,
      { $pullAll: { codes: [req.body.codes] } },
      (error_1, seller_removing_codes) => {
        if (err)
          return res
            .status(500)
            .send({
              success: false,
              message: "Something went wrong when finding seller."
            });
        res.json({
          success: true,
          msg: "Attempted to remove code from account!"
        });
      }
    );
    //console.log('after update is called');
  });
});

// A route to get the seller codes that have been added by the sellers
// used to view to sellers what Goods/Services they are offering
// By Roni
router.get("/getCode", (req, res) => {
  var token = req.headers["x-access-token"];
  var codeList = new Array();
  //if they don't have a token
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    Seller.findById(decoded.data._id, (err, seller_viewing_codes) => {
      if (err) return handleError(err);
      //console.log(seller_viewing_codes.codes.length)
      codeList = seller_viewing_codes.codes;
      //if no code were added for the seller
      if (codeList == "undefined" && codeList == null) {
        return res.json({ success: true, msg: "None" });
      }
      return res.json({ success: true, codeList });
    });
  });
});

//Email Verification - RONI
//Will check the route for a token and search the DB for a user with that
//token to activate their account
router.post("/confirmEmail/:token", (req, res, next) => {
  Seller.findOne({ confirmationToken: req.params.token }, (err, seller) => {
    if (err || seller == null)
      return res.json({ success: false, msg: "Not able to activate account" });
    var token = req.params.token;
    if (seller.userConfirmed) {
      return res.json({
        success: false,
        msg: "Your account is already actived."
      });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.json({ success: false, msg: "Activation link has expired." });
      } else if (!seller) {
        res.json({ success: false, msg: "Activation link has expired." });
      } else if (seller.userConfirmed) {
        res.json({ success: false, msg: "Acount already activated!" });
      } else {
        // Boolean in seller DB that indicates if user email has been confirmed or not
        seller.temptoken = false;
        seller.userConfirmed = true;
        seller.confirmationToken = undefined;
        seller.save(err => {
          if (err) {
            console.log(err);
          } else {
            //If account Registred Send Email for Email Verification Completed
            sendEmail.sellerEmailVerified(seller);
            const token = jwt.sign({ data: seller }, config.secret, {
              expiresIn: 86400 // 1 Day
            });

            res.json({
              success: true,
              token: `${token}`,
              seller: {
                id: seller._id,
                first_name: seller.first_name,
                last_name: seller.last_name,
                email: seller.email,
                msg: "Account Activated"
              }
            });
          }
        });
      }
    });
  });
});

// Resend Email Verification - RONI
router.post("/resend", (req, res, next) => {
  const email = req.body.email;

  Seller.getSellerbyEmail(email, (err, seller) => {
    if (err) return res.json({ success: false, msg: "Error." });
    if (!seller) {
      return res.json({ success: false, msg: "User not found." });
    }

    if (seller.userConfirmed) {
      return res.json({ success: false, msg: "Acount is already Activated." });
    }
    seller.confirmationToken = jwt.sign({ data: seller }, config.secret, {
      expiresIn: "24h"
    });
    seller.save(err => {
      if (err) {
        console.log(err);
      } else {
        // If account Registred Send Email for Email Verification
        sendEmail.sellerSendVerificationEmail(seller);
        return res.json({
          success: true,
          msg: "A new confirmation email has been sent to " + email + "."
        });
      }
    });
  });
});

// Reset password - RONI
router.post("/reset", (req, res, next) => {
  const email = req.body.email;

  Seller.getSellerbyEmail(email, (err, seller) => {
    if (err) return res.json({ success: false, msg: "Error." });
    if (!seller) {
      return res.json({ success: false, msg: "User not found." });
    }

    seller.resetPasswordToken = randomstring.generate(50);

    seller.save(err => {
      if (err) {
        console.log(err);
      } else {
        // If account Registred Send Email for Email Verification
        sendEmail.resetEmail(seller);
        return res.json({
          success: true,
          msg: "Password resent link has been sent to " + email + "."
        });
      }
    });
  });
});

// Reset password - RONI
router.post("/reset/:id", (req, res, next) => {
  const password = req.body.password;
  Seller.findOne({ resetPasswordToken: req.params.id }, (err, seller) => {
    if (err || seller == null)
      return res.json({ success: false, msg: "Password not saved." });
    var id = req.params.id;
    if (!seller) {
      return res.json({
        success: false,
        msg: "Password reset link has expired."
      });
    } else {
      seller.password = password;
      seller.resetPasswordToken = undefined;
      Seller.changePassword(seller, (err, sellerNewPass) => {
        if (err) {
          res.json({ success: false, msg: "Failed to change passwor!" });
        } else {
          sendEmail.passwordChanged(sellerNewPass);

          const token = jwt.sign({ data: seller }, config.secret, {
            expiresIn: 86400 // 1 Day
          });

          res.json({
            success: true,
            token: `${token}`,
            seller: {
              id: seller._id,
              first_name: seller.first_name,
              last_name: seller.last_name,
              email: seller.email
            },
            msg: "Password changed successfully."
          });
        }
      });
    }
  });
});

router.get("/getStripeRoute", (req, res) => {
  var token = req.headers["x-access-token"];

  //if they don't have a token
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });

  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
    const id = decoded.data._id;
    const redirect_uri = process.env.BASE_URL + "/seller";
    const client_id = process.env.STRIPE_CLIENT_ID;

    const urlToOpen =
      "https://connect.stripe.com/express/oauth/authorize?redirect_uri=" +
      redirect_uri +
      "&client_id=" +
      client_id +
      "&state=" +
      id;

    return res.status(200).send({ success: true, urlToOpen });
  });
});
module.exports = router;

//let seller to archive requests
//code by Andre
router.post("/addArchive", (req, res) => {
  const io = req.app.get('io');
  var token = req.headers["x-access-token"];

  //if they don't have a token
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    if (req.body.request_ID == null) {
      //console.log('No description added');
      return res
        .status(500)
        .send({ success: false, message: "No new archived item" });
    }
    //console.log('adding this request to archive: ' + req.body.request_ID);
    Seller.findById(decoded.data._id, (err, seller_descipt) => {
      if (err) return handleError(err);
      seller_descipt.archived_request.push(req.body.request_ID);
      seller_descipt.save().then(() => {
        io.emit('updatedSellerProfileInfo');
        return res.json({
          success: true,
          message: "Attempted to archive a request"
        });
      });
    });
  });
});

//route to get archived requests made by Andre
//uses mongoose to find archived requets
router.get("/getArchivedRequests", (req, res) => {
  var token = req.headers["x-access-token"];

  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must login to view archived requests." });
  jwt.verify(token, config.secret, (err, decoded) => {
    Seller.findById(decoded.data._id, (err, seller_viewing_requests) => {
      Request.find(
        { _id: { $in: seller_viewing_requests.archived_request } },
        (err, archived_request) => {
          if (err)
            return res
              .status(500)
              .send({
                success: false,
                message: "Could not find any archived requests"
              });
          res.status(200).send({ success: true, archived_request });
        }
      );
    });
  });
});

//let seller to delete an archived requests
//code by Andre
router.post("/deleteArchive", (req, res) => {
  //console.log('delete archive called');
  var token = req.headers["x-access-token"];

  //if they don't have a token
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });
  //otherwise verify the token and return user data in a response
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    if (req.body.request_ID == null) {
      //console.log('No description added');
      return res
        .status(500)
        .send({ success: false, message: "No new archived item" });
    }
    //console.log('deleting this request from archive: ' + req.body.request_ID);
    Seller.findByIdAndUpdate(
      decoded.data._id,
      { $pullAll: { archived_request: [req.body.request_ID] } },
      (error_1, seller_removing_archived) => {
        if (err)
          return res
            .status(500)
            .send({
              success: false,
              message: "Something went wrong when finding seller."
            });
        res.json({
          success: true,
          msg: "Attempted to remove archived request from account!"
        });
      }
    );
  });
});