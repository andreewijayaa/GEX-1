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

// Port Number
const port = process.env.PORT || 5000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

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


const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
