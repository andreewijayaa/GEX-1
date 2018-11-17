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
const codes = require('./routes/codes');

// Port Number
const port = 3000;

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

// Code route
app.use('/codes', codes);


//Homepage route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
      user: "gexreminders@gmail.com",
      pass: "TeamGEX2018"
  }
});
var rand,mailOptions,host,link;
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/send',function(req,res){
      rand=Math.floor((Math.random() * 100) + 54);
  host=req.get('host');
  link="http://"+req.get('host')+"/verify?id="+rand;
  mailOptions={
      to : req.query.to,
      subject : "Please confirm your Email account",
      html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
   if(error){
          console.log(error);
      res.end("error");
   }else{
          console.log("Message sent: " + response.message);
      res.end("sent");
       }
});
});

app.get('/verify',function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
  console.log("Domain is matched. Information is from Authentic email");
  if(req.query.id==rand)
  {
      console.log("email is verified");
      res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
  }
  else
  {
      console.log("email is not verified");
      res.end("<h1>Bad Request</h1>");
  }
}
else
{
  res.end("<h1>Request is from unknown source");
}
});

/*--------------------Routing Over----------------------------*/

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
