
/* By: Omar
Will let out app.js file know if we are in development of production. If we are in production we dont want our stripe secret key to be
public so this will ensure the secret key is hidden. 
If we are in development mode then it will not hide the stripe secret key.
*/
//const result = require('dotenv').config();
//console.log(result);
//console.log(process.env.NODE_ENV);
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'development') {
  require('dotenv').load();
  //require('dotenv').config();
}

console.log('Node Env= ' + process.env.NODE_ENV)

// Stripe Keys used for testing.
const keyPublishable = process.env.STRIPE_PUBLISHABLE_KEY;
const keySecret = process.env.STRIPE_SECRET_KEY;

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
var nodemailer = require("nodemailer");
const GridFSStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override')
const stripe = require('stripe')(keySecret);
const fs = require('fs');
const Offer = require('./models/offer');
const ejs = require('ejs')._express;
const multer = require("multer");
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

mongoose.set('useCreateIndex', true);

// Connect To Database
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then(() => console.log(`Connected to database ${config.database}`))
  .catch((err) => console.log(`Database error: ${err}`));


const app = express();

const buyers = require('./routes/buyers');
const sellers = require('./routes/sellers');
const requests = require('./routes/requests');
const codes = require('./routes/codes');

if (process.env.NODE_ENV == 'production') {
  // If an incoming request uses
  // a protocol other than HTTPS,
  // redirect that request to the
  // same url but with HTTPS
  const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }

  // Instruct the app
  // to use the forceSSL
  // middleware
  app.use(forceSSL());
}


// Port Number 

var port = 3000;
if(process.env.NODE_ENV === 'production')
{ var port = process.env.PORT || 8080; }

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(__dirname + '/public'));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// View Engine and ejs Middleware
app.set('view engine', 'ejs');

// Init gfs
let gfs;

//buyers route
app.use('/buyers', buyers);

//sellers route
app.use('/sellers', sellers);

//codes route
app.use('/codes', codes);

//requests route
app.use('/requests', requests);

// By: Omar
// Checkout route that communicates with Stripe. Creats a customer and charges them when they complete checkout for their accepted offer.
app.post('/checkout', (req, res, next) => {
  let offer = {
    stripeEmail: req.body.email,
    stripeToken: req.body.token,
    amount: req.body.amount,
    description: req.body.description
  }

  stripe.customers.create({
    email: offer.stripeEmail,
    source: offer.stripeToken
  })
  .then(customer => stripe.charges.create({
    amount: offer.amount,
    currency: 'usd',
    //title: req.body.product,
    description: offer.description,
    customer: customer.id,
    //source: offer.stripeToken
  }))
});


if (process.env.NODE_ENV == 'production') {
  // For all GET requests, send back index.html
  // so that PathLocationStrategy can be used
  app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
  });
}
app.all('*', function(req, res) {
  res.redirect(process.env.BASE_URL);
  
});
// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
