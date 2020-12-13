var sendemail = require('sendemail')
var email = sendemail.email;
import sendemail from 'sendemail'
 
var person = {
  name : "Jenny",
  email: "your.name+test" + Math.random() + "@gmail.com", // person.email can also accept an array of emails
  subject:"Welcome to DWYL :)"
}
 
email('welcome', person, function(error, result){
  console.log(' - - - - - - - - - - - - - - - - - - - - -> email sent: ');
  console.log(result);
  console.log(' - - - - - - - - - - - - - - - - - - - - - - - - - - - -')
})

// ********************** for multiple person 

//   var sendemail   = require('sendemail'); 
//   var options = {
//     templateName: 'hello',
//     context: {
//       tempalateVariableName: 'Variable Value',
//       name: 'Joe Bloggs'
//     },
//     subject: 'Welcome to Email',
//     senderEmailAddress: 'From Name <from@gmail.com>',
//     toAddresses: ['recipient1@gmail.com', 'recipient2@gmail.com'],
//     ccAddresses: ['ccRecipient1@gmail.com', 'ccRecipient2@gmail.com'],
//     bccAddresses: ['bccRecipient1@gmail.com', 'bccRecipient2@gmail.com'],
//     htmlCharset: 'utf16',
//     textCharset: 'utf16',
//     subjectCharset: 'utf8'
//   };
 
//   sendemail.sendMany(options, callback);