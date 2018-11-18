var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
    api_user: 'ronjonsilver',
    api_key: 'GEXTeamrocks2018'
  }
}

var client = nodemailer.createTransport(sgTransport(options));

module.exports.sendVerificationEmail = function(user, callback){
    //If account Registred Send Email for Email Verification
    var email = {
        from: 'gex_do_not_reply@gex.com',
        to: user.email,
        subject: 'Email Activation',
        text: 'Random',
        html: "<b>Click here to confirm</b><a href="+"http://localhost:4200/postactivation/" + user.confirmationToken +">Click here</a>."
      };
      
      client.sendMail(email, function(err, info){
          if (err ){
            console.log(error);
          }
          else {
            console.log('Message sent to: ' + user.email + '\nwith token : ' + user.confirmationToken);
          }
      });
}
module.exports.emailVerified = function(user, callback){
    //If account Registred Send Email for Email Verification
    var email = {
        from: 'gex_do_not_reply@gex.com',
        to: user.email,
        subject: 'Email Verified!',
        text: 'Random',
        html: "<b>Hello " + user.first_name + ". Thank You for verifying your email.</b>"
      };
      
      client.sendMail(email, function(err, info){
          if (err ){
            console.log(error);
          }
          else {
            console.log('Message sent to: ' + user.email);
          }
      });
}