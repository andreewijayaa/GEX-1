//By Roni
//Using SendGrid as our email service
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

//SendGrid Login Information
var options = {
  auth: {
    api_user: 'ronjonsilver',
    api_key: 'GEXTeamrocks2018'
  }}
//Connect the nodemailer to the sendgrid client
var client = nodemailer.createTransport(sgTransport(options));

//Function that will take in a user, and email them their token
//Used Upon user registration to confirm email
module.exports.sendVerificationEmail = function(user, callback){
    //If account Registred Send Email for Email Verification
    var email = {
        from: 'gex_do_not_reply@gex.com',
        to: user.email,
        subject: 'Email Activation!',
        text: 'Hello ' + user.first_name + ', Click the link to acitvate account',
        //Development
        html: '<h2>Hello ' + user.first_name + ',</h2> <h4>To complete Registration, Click the link below.</h4></br><a href="http://localhost:4200/postactivation/' + user.confirmationToken + '"> Activate Account!</a> <h6>If the above button does not work, please copy & paste this in your browser:<br> http://localhost:4200/postactivation/' + user.confirmationToken
        //Production
        //html: '<h2>Hello ' + user.first_name + ',</h2> <h4>To complete Registration, Click the link below.</h4></br><a href="https://powerful-taiga-46416.herokuapp.com/postactivation/' + user.confirmationToken + '"> Activate Account!</a><h6>If the above button does not work, please copy & paste this in your browser:<br> https://powerful-taiga-46416.herokuapp.com/postactivation/' + user.confirmationToken
      };
      client.sendMail(email, function(err, info){
          if (err ){
            console.log(error);
          }
          else {
            //console.log('Message sent to: ' + user.email + '\nwith token : ' + user.confirmationToken);
          }
      });
}
//Function that will take in a user, and email them account verifcation completed
//Used Upon user has activated their email
module.exports.emailVerified = function(user, callback){
    //If account Registred Send Email for Email Verification
    var email = {
        from: 'gex_do_not_reply@gex.com',
        to: user.email,
        subject: 'Account Activated!',
        text: 'Random',
        html: '<h2>Hello ' + user.first_name + ',</h2> <h4>Your account has been activated!</h4>'
      };
      
      client.sendMail(email, function(err, info){
          if (err ){
            console.log(error);
          }
          else {
            //console.log('Message sent to: ' + user.email);
          }
      });
}
//Function that will take in a seller, and request ID then email applicable sellers with a link to the request
//Used Upon buyer submitting a new request
module.exports.NotifySeller= function(seller, requestID, callback){
    var email = {
      from: 'gex_do_not_reply@gex.com',
      to: seller.email,
      subject: 'You have a new request!',
      text: 'Random',
      //Development
      html: '<h2>Hello ' + seller.first_name + ',</h2> <h4>A new request is available.</h4></br><a href="http://localhost:4200/request/' + requestID + '"> Open Request</a>'
      //Production
      //html: '<h2>Hello ' + seller.first_name + ',</h2> <h4>A new request is available.</h4></br><a href="https://powerful-taiga-46416.herokuapp.com/request/' + requestID + '"> Open Request</a>'
    };
  client.sendMail(email, function(err, info){
    if (err ){
      console.log(error);
    }
    else {
      //console.log('Message sent to: ' + user.email);
    }
}); 
}