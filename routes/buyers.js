var randomstring = require("randomstring");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const Buyer = require("../models/buyer");
const Request = require("../models/request");
const Address = require("../models/address");
const Order = require("../models/order");
const sendEmail = require("../models/sendEmail");
const bcrypt = require("bcryptjs");
const upload = require("../services/multer");
const upload2 = require("../services/multer2");
const singleUpload = upload.single("image");
const singleUpload2 = upload2.single("image");
const Offer = require("../models/offer");
const keyPublishable = process.env.STRIPE_PUBLISHABLE_KEY;
const keySecret = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(keySecret);
const Taxjar = require('taxjar');
const Seller = require("../models/seller");
const client = new Taxjar({
  apiKey: process.env.TAXJAR_KEY
});

//Register route for buyers by Roni
//Takes in all required information as JSON
router.post("/register", (req, res /*,next*/) => {
  let newBuyer = new Buyer({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    confirmationToken: jwt.sign({ data: "buyer" }, config.secret, {
      expiresIn: "24h"
    }) // 1 day
  });

  //code for detecting registering buyer with the same email. By John
  Buyer.findOne({ email: req.body.email }, (err, foundBuyer) => {
    if (err) return handleError(err); //if err is encountered while searching for buyer
    if (foundBuyer != null) {
      console.log("Found buyer with email %s", foundBuyer.email);
      res.json({
        success: false,
        msg: "Failed to register Buyer! Email already used for another account."
      });
    } else {
      //end of code for email detection by John
      //console.log('New email used, %s',req.body.email);
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email)
      ) {
        //console.log('New email address %s passed format checking.', req.body.email);
        //Adding buyer to the DB
        Buyer.addBuyer(newBuyer, (err, buyer) => {
          if (err) {
            res.json({ success: false, msg: "Failed to register Buyer!" });
          } else {
            //after buyer was added to DB, send email for verification - RONI
            sendEmail.buyerSendVerificationEmail(buyer);
            res.json({ success: true, msg: "Buyer Registered!" });
          }
        });
      } else {
        //console.log('New email address %s failed format checking.', req.body.email);
        res.json({
          success: false,
          msg: "Failed to register Buyer! Email is not valid format."
        });
      }
    }
  });
});

//Authenticate
router.post("/login", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  Buyer.getBuyerbyEmail(email, (err, buyer) => {
    if (err) throw err;
    if (!buyer) {
      return res.json({ success: false, msg: "Unable to find account with provided email." });
    }
    //Check email verification - RONI
    if (!buyer.userConfirmed) {
      return res.json({
        success: false,
        msg: "Please Activate your account first."
      });
    }
    //if statement added in by John in case a Seller somehow tries to login as a buyer and gets this far
    if (buyer.account_type != 0) {
      return res.json({
        success: false,
        msg: "Your account must be a seller to sign in as a seller."
      });
    } //end of statement added in by John
    Buyer.comparePassword(password, buyer.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({ data: buyer }, config.secret, {
          expiresIn: 86400 // 1 Day
        });

        res.json({
          success: true,
          token: `${token}`,
          buyer: {
            id: buyer._id,
            first_name: buyer.first_name,
            last_name: buyer.last_name,
            email: buyer.email,
            profile_image: buyer.profile_image,
            offerCart: buyer.offerCart
          }
        });
      } else {
        return res.json({ success: false, msg: "Wrong password" });
      }
    });
  });
});

//Profile
router.get("/profile", (req, res) => {
  var token = req.headers["x-access-token"];

  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must login to get profile information." });

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });
    Buyer.findById(decoded.data._id, (err, buyer_found) => {
      if (err) return handleError(err);
      //console.log(buyer_found);
      res.status(200).send({ success: true, buyer_found });
    });
  });

});

// Create Request AKA BUYER SUBMIT REQUEST By Roni
// Route to post request to the DB with the information entered by buyer and also information about the buyer submitting the request
router.post('/request', (req, res, next) => {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ success: false, message: 'Must login to create request.' });

  // Must be a buyer logged in to be able to submit a request
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
    // Create the new request object with the following fields
    var request = new Request({
      buyer_ID: decoded.data._id,
      code: req.body.code,
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      status: "awaiting offers"
    });

    //code added by John to add images to requests
    if (req.body.request_pic != null){
      request.request_images = req.body.request_pic;
      console.log("in that if statement");
    }
    console.log("past if statement");
    //end of code added by john to add images to request
    // console.log('buyers id is %s', decoded.data._id);
    //Find buyer to attach the request ID to the buyer_requests_byID
    //console.log(decoded.data._id);
    Buyer.findById(decoded.data._id, (err, buyer_making_request) => {
      
      //console.log(buyer_making_request);
      if (err) return handleError(err);
      // Save Request
      request.save((err, post) => {
        console.log(post);
        if (err) { return next(err); }
        //console.log('inside save function');
        buyer_making_request.buyer_requests_byID.push(post._id);
        buyer_making_request.save((err) => {
          if (err) { return next(err); }

          // MATCHING ALGORITHM BY RONI
          // Look for a seller with the same code the buyer has posted a request with
          // find all applicable sellers and email them (Notifcation System) 
          // The email will contain a link to view the Request for sellers 
          Seller.find({ 'codes': { $in: post.code} }, (err, applicableSeller) => {
            if (err) { return next(err); }

            //console.log(applicableSeller);
            //console.log('Post Id:' + post.code)
            //console.log(applicableSeller);
            // Loop through all the sellers found and email them independtly
            // Might need to find a better way of doing this for when there is a large amount of sellers
            applicableSeller.forEach(function(currentSeller) {
              currentSeller.open_requests.push(post._id);
              currentSeller.save((err) => {
                if (err) { return next(err); }
              });
              sendEmail.NotifySellerNewRequest(currentSeller, post);
            });
          });
          return res.json({ success: true, msg: 'Your request was submitted!' });
        });
      });
    });
  });
});

//Code to add picutres to request. Testing purposes before adding to add request.post
//by John
router.post("/requestpicture", function(req, res) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });
  jwt.verify(token, config.secret, function(err, decoded) {
    singleUpload2(req, res, function(err, some) {
      if (err) {
        return res.status(422).send({
          errors: [{ title: "Image Upload Error", detail: err.message }]
        });
      }
      //console.log(req.file.location);
      return res.json({ imageUrl: req.file.location });
    });
  });
});

//function to delete requests
// By John
router.post("/deleterequest", function(req, res) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "No token provided." });
  jwt.verify(token, config.secret, function(err, decoded) {
    //req.body.request_id
    //console.log("Request ID to delete" + req.body.request_id);
    Request.findById(req.body.request_id, (err, request_being_deleted) => {
      //console.log("Buyer ID from login " + decoded.data._id);
      //console.log("Buyer ID from request " + request_being_deleted.buyer_ID);
      console.log("requests offer count " + request_being_deleted.offerCount);
      if (request_being_deleted.buyer_ID != decoded.data._id) {
        return res.status(500).send({
          success: false,
          message: "You must be the owner of this request to delete it"
        });
      }
      else if ((request_being_deleted.offerCount != 0)){
        return res.status(201).send({
          success: false,
          message: "A Request with offers Cannot be deleted"
        });
      }
      else{
        Request.findByIdAndRemove(req.body.request_id, (err, wewlad) => {
          if (err) {
            res.send("Error deleting request")
          }
          return res.json(wewlad);
        });
      }
    });
  });
});

// Retrieve all applicable requests to the logged in buyer
router.get("/request", (req, res, next) => {
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
    Buyer.findById(decoded.data._id, (err, buyer_viewing_requests) => {
      if (err) return handleError(err);

      if (buyer_viewing_requests.buyer_requests_byID != []) {
        Request.find({ buyer_ID: decoded.data._id }, (err, requests) => {
          if (err)
            return res.status(500).send({
              success: false,
              message: "Could not find requests with ID"
            });
          res.status(200).send({ success: true, requests });
        });
      } else {
        res
          .status(500)
          .send({ success: false, message: "There are no requests to view" });
      }
    });
  });
});

/*
Profile update - By: Omar
Will find the buyer by using their id number and update their information accordingly.
*/
router.post("/update", (req, res) => {
  const io = req.app.get('io');
  let update = {
    first_name: req.body.fName,
    last_name: req.body.lName,
    id: req.body.updater_id
  };
  console.log(update);

  Buyer.findById(update.id, (err, updated) => {
    if (!update)
      return res.status(405).send({
        success: false,
        message: "could not retrieve buyer info to update."
      });
    else {
      updated.first_name = update.first_name;
      updated.last_name = update.last_name;
      updated.save().then(() => {
        io.emit('updatedBuyerProfileInfo');
        res.json({ success: true });
      });
    }
  });
});

//route to add profile picture to account
//by John
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
        return res.status(422).send({
          errors: [{ title: "Image Upload Error", detail: err.message }]
        });
      }
      // console.log(req.file.location);
      Buyer.findById(decoded.data._id, (err, buyer_pic) => {
        buyer_pic.set({ profile_image: req.file.location });
        buyer_pic.save().then(() => {
          io.emit('updatedBuyerProfileInfo');
          res.json({ success: true, imageUrl: req.file.location });
        });
      });
    });
  });
});
/*
Profile update - By: Omar
Will add the accepted offer to the buyers cart.
*/
router.post("/addToCart", (req, res, next) => {
  const io = req.app.get('io');
  var token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must login to create request." });

  // Must be a buyer logged in to be able to enter an item to cart
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate token." });

    //const offerCart = decoded.data.offer
    //console.log(req.body.offerID);

    //Find buyer to add the offer to the buyers cart
    Buyer.findById(decoded.data._id, (err, buyerToAddCart) => {
      // console.log('inside the find by id function');
      if (err) return handleError(err);
      // Save item to cart
      buyerToAddCart.offerCart.push(req.body.offerID);
      buyerToAddCart.save().then(() => {
        io.emit('updatedBuyerProfileInfo');
        res.json({ success: true });
      });
    });
  });
});

// Retrieve Cart with offers as objects
router.get("/retrieveCart", (req, res, next) => {
  var token = req.headers["x-access-token"];
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must Login to view Cart!." });
  var orderTotal = 0,
    offerPriceTotal = 0,
    offerShippingTotal = 0,
    orderFees = 0;
  // Must be a buyer logged in to be able to enter an item to cart
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate user." });

    Buyer.findById(decoded.data._id, (err, buyerViewingCart) => {
      if (err) return handleError(err);
      if (
        buyerViewingCart.offerCart == undefined ||
        buyerViewingCart.offerCart.length <= 0
      )
        return res
          .status(200)
          .send({ success: false, message: "Cart is Empty." });

      Offer.find(
        { _id: { $in: buyerViewingCart.offerCart } },
        (err, offersInCart) => {
          if (err)
            return res
              .status(500)
              .send({ success: false, message: "Offer not found." });
          var offers = offersInCart;

          // Add entity name to the returned object.
          offersInCart.forEach(function(currentOffer) {
            offerPriceTotal = offerPriceTotal + currentOffer.price;
            offerShippingTotal = offerShippingTotal + currentOffer.shippingPrice;
            //Seller.findById(currentOffer.seller_ID, (err, SellersOffer) => {
            //});
          });
          offerPriceTotal = Math.round(offerPriceTotal * 100) / 100;
          offerShippingTotal = Math.round(offerShippingTotal * 100) / 100;
          orderTotal = offerPriceTotal + offerShippingTotal;
          orderTotal = Math.round(orderTotal * 100) / 100;

          return res.status(200).send({
            success: true,
            offersInCart,
            offerPriceTotal,
            offerShippingTotal,
            orderTotal
          });
        }
      );
    });
  });
});

// Offer Accepted
router.post("/offerAccepted", (req, res /*next*/) => {
  let accepted = {
    id: req.body.offer_ID,
    offerAccepted: req.body.offer_accepted
  };

  Offer.findById(accepted.id, (err, offer) => {
    if (!offer)
      return res.status(405).send({
        success: false,
        message: "could not retrieve offer info to update."
      });
    else {
      offer.offerAccepted = accepted.offerAccepted;
      offer.save();
      res.json({ success: true });
    }
  });
});

// Offer Removed so Rejected
router.post("/offerRejected", (req, res /*next*/) => {
  let removed = {
    id: req.body.offer_ID,
    offerRemoved: req.body.offer_removed
  };

  Offer.findById(removed.id, (err, offer) => {
    if (!offer)
      return res.status(405).send({
        success: false,
        message: "could not retrieve offer info to update."
      });
    else {
      offer.offerAccepted = removed.offerRemoved;
      offer.save();
      res.json({ success: true });
    }
  });
});

// Remove offer from Cart
router.post("/removeFromCart", (req, res, next) => {
  const io = req.app.get('io');
  var token = req.headers["x-access-token"];
  const offer = req.body.offerID;
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Must Login to view Cart!." });

  // Must be a buyer logged in to be able to enter an item to cart
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ success: false, message: "Failed to authenticate user." });

    Buyer.findById(decoded.data._id, (err, buyerViewingCart) => {
      if (err) return handleError(err);
      if (
        buyerViewingCart.offerCart == undefined ||
        buyerViewingCart.offerCart.length <= 0
      )
        return res
          .status(200)
          .send({ success: false, message: "Cart is Empty." });

      var index = buyerViewingCart.offerCart.indexOf(offer);
      if (index !== -1) {
        if (index > -1) {
          buyerViewingCart.offerCart.splice(index, 1);
        }
      } else {
        return res
          .status(500)
          .send({ success: false, msg: "Offer not found in cart." });
      }

      if (buyerViewingCart.offerCart.indexOf(offer) === -1) {
        buyerViewingCart.save().then(() => {
          io.emit('updatedBuyerCartInfo');
          return res
          .status(200)
          .send({ success: true, msg: "Offer removed from cart." });
        });
      } else {
        return res
          .status(500)
          .send({ success: false, msg: "Unable to remove offer from cart." });
      }
    });
  });
});

router.post("/tax", (req, res) => {
  let taxInfo = {
    from_country: 'US',
    from_zip: '85304',
    from_state: 'AZ',
    from_city: 'Glendale',
    from_street: '12420 N 43rd Ln',
    to_country: req.body.to_country,
    to_zip: req.body.to_zip,
    to_state: req.body.to_state,
    shipping: req.body.shipping,
    amount: req.body.amount
  }

  client.taxForOrder({
    from_country: taxInfo.from_country,
    to_country: taxInfo.to_country,
    to_zip: taxInfo.to_zip,
    to_state: taxInfo.to_state,
    amount: taxInfo.amount,
    shipping: taxInfo.shipping,
    nexus_addresses: [
      {
        country: 'US',
        zip: taxInfo.from_zip,
        state: taxInfo.from_state,
        city: taxInfo.from_city,
        street: taxInfo.from_street
      }
    ]
  }).then(function(result) {
    result.tax;
    result.tax.amount_to_collect;
    res.send({ success: true, result});
  }).catch(function(err) {
    err.detail;
    err.status;
    res.send({ success: false, err})
  });
})

// By: Omar
// Checkout route that communicates with Stripe. Creats a customer and charges them when they complete checkout for their accepted offer.
router.post("/charge", (req, res) => {
  let purchaseInfo = {
    buyerID: req.body.buyerID,
    stripeEmail: req.body.email,
    stripeToken: req.body.token.id,
    amount: req.body.amount,
    totalOffers: req.body.totalOffers,
    shippingInfo: req.body.shippingInfo,
    orderID: req.body.orderID,
    name: req.body.name,
    sellers: req.body.sellers
  };

  Buyer.findById(purchaseInfo.buyerID, (err, info) => {
    if (!info)
      return res.status(405).send({
        success: false,
        message: "Could not retrieve buyer to charge purchase."
      });
    else if (info.stripe_customer === false) {
      console.log("Not a stripe customer yet but will be.");
      info.stripe_customer = true;
      stripe.customers
        .create({
          email: purchaseInfo.stripeEmail,
          source: purchaseInfo.stripeToken
        })
        .then(customer => {
          info.stripe_customer_id = customer.id;
          info.save();
          stripe.charges
            .create({
              amount: purchaseInfo.amount,
              currency: "usd",
              description: "Charge for " + purchaseInfo.name + ".",
              customer: customer.id,
              receipt_email: purchaseInfo.stripeEmail,
              metadata: {
                order_id: purchaseInfo.orderID
              },
              // transfer_group: purchaseInfo.orderID
            })
            .then(charge => res.send({ success: true, charge }));
        });
    } else if (info.stripe_customer === true) {
      console.log("Is already a stripe customer");
      stripe.customers
        .update(info.stripe_customer_id, {
          source: purchaseInfo.stripeToken
        })
        .then(customer =>
          stripe.charges.create({
            amount: purchaseInfo.amount,
            currency: "usd",
            description: "Charge for " + purchaseInfo.name + ".",
            receipt_email: purchaseInfo.stripeEmail,
            customer: customer.id
          })
        )
        .then(charge => res.send({ success: true, charge }));
    } else {
      res.json({ success: false, msg: "Could not charge customer" });
    }
  });

  // for (var pos = 0; pos < purchaseInfo.totalOffers.length; pos++) {
  //   //console.log(purchaseInfo.totalOffers[pos].seller_ID);
  //   stripe.transfers
  //     .create({
  //       amount: purchaseInfo.totalOffers[pos].price * 100,
  //       currency: "usd",
  //       destination: "{CONNECTED_STRIPE_ACCOUNT_ID}",
  //       transfer_group: purchaseInfo.orderID
  //     })
  //     .then(transfer => res.send({ success: true, transfer }));
  // }
});

//Email Verification - RONI
//Will check the route for a token and search the DB for a user with that
//token to activate their account
router.post("/confirmEmail/:token", (req, res, next) => {
  Buyer.findOne({ confirmationToken: req.params.token }, (err, buyer) => {
    if (err || buyer == null)
      return res.json({ success: false, msg: "Not able to activate account" });
    var token = req.params.token;

    if (buyer.userConfirmed) {
      return res.json({
        success: false,
        msg: "Your account is already actived."
      });
    }
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res.json({ success: false, msg: "Activation link has expired." });
      } else if (!buyer) {
        res.json({ success: false, msg: "Activation link has expired." });
      } else if (buyer.userConfirmed) {
        res.json({ success: false, msg: "Acount already activated!" });
      } else {
        // Boolean in buyer DB that indicates if user email has been confirmed or not
        buyer.temptoken = false;
        buyer.userConfirmed = true;
        buyer.confirmationToken = undefined;
        buyer.save(err => {
          if (err) {
            console.log(err);
          } else {
            //If account Registred Send Email for Email Verification Completed
            sendEmail.buyerEmailVerified(buyer);
            //Automatically login user after account activation
            const token = jwt.sign({ data: buyer }, config.secret, {
              expiresIn: 86400 // 1 Day
            });
    
            res.json({
              success: true,
              token: `${token}`,
              buyer: {
                id: buyer._id,
                first_name: buyer.first_name,
                last_name: buyer.last_name,
                email: buyer.email,
                profile_image: buyer.profile_image,
                offerCart: buyer.offerCart
              },
              msg: "Account Activated."
            });
          }
        });
      }
    });
  });
});

// Password Update Route
router.post("/updatePassword", (req,res, next) => {
  // Get the body info, to updated and confirm the new password
  const oldPass = req.body.oldPassword;
  const newPass = req.body.newPassword;
  const newPassConfirm = req.body.newPasswordConfirm;
  var token = req.headers["x-access-token"];


  // Check if there is a logged token 
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Please login." });

  // Verify the token
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err)
      return res.status(500).send({ success: false, message: "Failed to authenticate token." });
      //Make sure all fields are not null
      if (oldPass == undefined || newPass == undefined || newPassConfirm == undefined ||
        oldPass == "" || newPass == "" || newPassConfirm == "") {
        return res.json({ success: false, msg: "Please complete all required fields." });
      }
      // Find the buyer that is trying to update their password
      Buyer.findById(decoded.data._id, (err, buyerChangingPassword) => {
        // Check if the inputted old password matches the saved password in DB
        Buyer.comparePassword(oldPass, buyerChangingPassword.password, (err, isMatch) => {
        if (err) throw err;
        // saved password and entered old password match
        if (isMatch) {
          // Make sure that the password confirmation is valid
          if(newPass == newPassConfirm) {
            buyerChangingPassword.password = newPass;
            // Now Bycrpt the new password and save to DB - Not checking if the new password is the same as old password
            Buyer.changePassword(buyerChangingPassword, (err, buyerNewPass) => {
              if(err) {
                res.json({success: false, msg:"Failed to update password!"});
              } else {
                sendEmail.passwordChanged(buyerNewPass);
                res.json({success: true, msg:"Password updated successfully!"});
              }
            });
          } else {
            return res.json({ success: false, msg: "New passwords do not match." });
          }
        } else {
          return res.json({ success: false, msg: "Old password did not match." });
        }
  
      });
    });
  });
});

// Resend Email Verification -- NOT YET USED/TESTED - RONI
router.post("/resend", (req, res, next) => {
  const email = req.body.email;

  Buyer.getBuyerbyEmail(email, (err, buyer) => {
    if (err) return res.json({ success: false, msg: "Error." });
    if (!buyer) {
      return res.json({ success: false, msg: "User not found." });
    }
    if (buyer.userConfirmed) {
      return res.json({ success: false, msg: "Acount is already Activated." });
    }

    buyer.confirmationToken = jwt.sign({ data: buyer }, config.secret, {
      expiresIn: "24h"
    });
    buyer.save(err => {
      if (err) {
        console.log(err);
      } else {
        // If account Registred Send Email for Email Verification
        sendEmail.buyerSendVerificationEmail(buyer);
        return res.json({
          success: true,
          msg: "A new confirmation email has been sent to " + email + "."
        });
      }
    });
  });
});

// Reset password - RONI
router.post('/reset', (req, res, next) => {
  const email = req.body.email;
  
  Buyer.getBuyerbyEmail(email, (err, buyer) => {
    if (err) return res.json({ success: false, msg: 'Error.' });
    if (!buyer) {
      return res.json({ success: false, msg: 'User not found.' });
    }

    buyer.resetPasswordToken = randomstring.generate(50);

    buyer.save((err) => {
      if (err) {
        console.log(err);
      } else {
        // If account Registred Send Email for Email Verification
        sendEmail.resetEmail(buyer);
        return res.json({ success: true, msg: 'Password resent link has been sent to ' + email +'.' });
      }
    });
  });
})

// Generate Order Number
router.post('/generateOrderNumber', (req, res, next) => {
  var orderNum;
  var token = req.headers["x-access-token"];
  // Check if there is a logged token 
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Please login." });

  // Verify the token
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.status(500).send({ success: false, message: "Failed to authenticate token." });

    getNumber();

    // Generating random number string function, it will be called recursively
    function getNumber() {

      orderNum = 'R-'+Math.random().toString().substr(2, 5) + '-' + Math.random().toString().substr(2, 3); 
      

      console.log('Order number = ' + orderNum);

      // Search for an order with the same orderNumber, avoiding duplicate order numbers
      Order.findOne({'orderNumber': orderNum}, (err, fetchedOrders) => {
        if (err) return getNumber();
        if(fetchedOrders != null) return getNumber();
        else if (fetchedOrders == null) return res.json(orderNum);
      });
    }
  });
});



// Reset password - RONI
router.post('/reset/:id', (req, res, next) => {
  const password = req.body.password;
  Buyer.findOne({resetPasswordToken: req.params.id}, (err, buyer) => {
    if(err || buyer == null) return res.json({success: false, msg: 'Not able to activate account'});
    var id = req.params.id;

      if(err)
      {
        res.json({success:false, msg: 'Password reset link has expired.'});
      } else if (!buyer) {
        res.json({success:false, msg: 'Password reset link has expired.'});
      } else {
        buyer.password = password;
        buyer.resetPasswordToken = undefined;
        Buyer.changePassword(buyer, (err, buyerNewPass) => {
          if(err){
              res.json({success: false, msg:"Failed to change password!"})
          }
          else {
              sendEmail.passwordChanged(buyerNewPass);

              const token = jwt.sign({ data: buyerNewPass }, config.secret, {
                expiresIn: 86400 // 1 Day
              });
  
              res.json({
                success: true,
                token: `${token}`,
                buyer: {
                  id: buyer._id,
                  first_name: buyer.first_name,
                  last_name: buyer.last_name,
                  email: buyer.email,
                  profile_image: buyer.profile_image,
                  offerCart: buyer.offerCart
                },
                msg:'Password changed successfully.'
              });
          }
      });
      }
  });
});

module.exports = router;
