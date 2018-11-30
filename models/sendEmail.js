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
        subject: 'Email Activation!',
        text: 'Hello ' + user.first_name + ', Click the link to acitvate account',
        html: '<h2>Hello ' + user.first_name + ',</h2> <h4>To complete Registration, Click the link below.</h4></br><a href="http://localhost:4200/postactivation/' + user.confirmationToken + '"> Activate Account!</a>'
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

module.exports.NotifySeller= function(seller, requestID, callback){
  var email = {
    from: 'gex_do_not_reply@gex.com',
    to: seller.email,
    subject: 'You have a new request!',
    text: 'Random',
    html: '<h2>Hello ' + seller.first_name + ',</h2> <h4>A new request is available.</h4></br><a href="http://localhost:4200/request/' + requestID + '"> Open Request</a>'
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