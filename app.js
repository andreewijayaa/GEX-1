const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
var nodemailer = require("nodemailer");


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

/* Uncomment for deployment
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
*/
// Port Number //Change to 8080 for deployment
const port = process.env.PORT || 3000;


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

//buyers route
app.use('/buyers', buyers);

//sellers route
app.use('/sellers', sellers);

//codes route
app.use('/codes', codes);

//requests route
app.use('/requests', requests);

// ... uncomment for deployment
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
//app.get('/*', function(req, res) {
//  res.sendFile(path.join(__dirname + '/public/index.html'));
//});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
