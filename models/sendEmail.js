//By Roni
//Using SendGrid as our email service
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//Function that will take in a user, and email them their token
//Used Upon user registration to confirm email
module.exports.sendVerificationEmail = function(user, callback){
  const msg = {
    to: user.email,
    from: 'gex_do_not_reply@gex.com',
    templateId: 'd-479988c021f8483ab911fe7222a9c253',
    dynamic_template_data: {
      name: user.first_name,
      //tokenID: 'http://localhost:4200/postactivation/' + user.confirmationToken,
      tokenID: '"https://powerful-taiga-46416.herokuapp.com/postactivation/' + user.confirmationToken,
    },
  };
  sgMail.send(msg).then(() => {
  }).catch((error) => {
    console.log('error', error);
  });
}

//Function that will take in a user, and email them account verifcation completed
//Used Upon user has activated their email
module.exports.emailVerified = function(user, callback){
  const msg = {
    to: user.email,
    from: 'gex_do_not_reply@gex.com',
    templateId: 'd-48ecbc2363a1462985a1e8e5278b39fb',
    dynamic_template_data: {
      name: user.first_name,
    },
  };
  sgMail.send(msg).then(() => {
  }).catch((error) => {
    console.log('error', error);
  });
}

//Function that will take in a seller, and request ID then email applicable sellers with a link to the request
//Used Upon buyer submitting a new request
module.exports.NotifySeller= function(seller, request, callback){
  const msg = {
    to: seller.email,
    from: 'gex_do_not_reply@gex.com',
    templateId: 'd-33099325b30c4edc940590551c708f87',
    dynamic_template_data: {
      name: seller.first_name,
      //requestID: 'http://localhost:4200/request/' + request._id,
      requestTitle: request.Title,
      requestID : 'https://powerful-taiga-46416.herokuapp.com/request/' + requestID,
    },
  };
  //console.log('Sent Notification to seller ' + seller.email + ' With Request ' + request._id);
  
  sgMail.send(msg).then(() => {
  }).catch((error) => {
    console.log('error', error);
  });
  
}