// By Kurgan and Roni
// Token verification with passport package
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Buyer = require('../models/buyer');
const Seller = require('../models/seller');
const config = require('../config/database');

module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = config.secret;
  // Buyer token verification
  passport.use('buyer-rule',new JwtStrategy(opts, (jwt_payload, done) => {
    Buyer.getBuyerbyId(jwt_payload.data._id, (err, buyer) => {
      if(err){
        return done(err, false);
      }
      if(buyer){
        return done(null, buyer);
      } else {
        return done(null, false);
      }
    });
  }));
  // Seller token verification
  passport.use('seller-rule',new JwtStrategy(opts, (jwt_payload, done) => {
    Seller.getSellerbyId(jwt_payload.data._id, (err, seller) => {
      if(err){
        return done(err, false);
      }
      if(seller){
        return done(null, seller);
      } else {
        return done(null, false);
      }
    });
  }));
}
