const express = require('express');
const router = express.Router();
const passport = require('passport-jwt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Register
router.post('/register',(req,res,next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        status: req.body.status
    });
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:"Failed to register user!"})
        }
        else if(user.status == 0){
            res.json({success: true, msg:"Buyer Registered!"})
        }
        else if(user.status == 1){
            res.json({success: true, msg:"Seller Registered!"})
        }
    });
});

//Authenticate
router.get('/authenticate',(req,res,next) => {
    res.send('AUTHENTICATE');
});

//Profile
router.get('/profile',(req,res,next) => {
    res.send('PROFILE');
});

//Validate
router.get('/validate',(req,res,next) => {
    res.send('VALIDATE');
});

module.exports = router;