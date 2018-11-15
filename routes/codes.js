const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Code = require('../models/code');

//Register
router.post('/addCode',(req,res/*,next*/) => {
    let newCode = new Code({
      code_number: req.body.code_number,
      code_description: req.body.code_description,
      code_catagory: req.body.code_catagory,
      catagory_number: req.body.catagory_number,
  });
  Code.addCode(newCode, (err, code) => {
    if(err){
        res.json({success: false, msg:"Failed to add Code!"})
    }
    else {
        res.json({success: true, msg:"Code Added!"})
    }
    }); 
});

// Get Codes
router.get('/getCodes', (req, res, next) => {
    Code.find().exec((err, code) => { res.json(code) });
});

module.exports = router;
