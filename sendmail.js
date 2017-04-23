var pub_key='[ENTER_HERE]';
var priv_key='[ENTER_HERE]'
var Mailjet = require('node-mailjet').connect(pub_key, priv_key);
var sendEmail = Mailjet.post('send');
var emailData = {
  'FromEmail': '[ENTER_HERE(must be verified)]',
  'FromName': 'Some name',
  'Subject': 'Test with the NodeJS Mailjet wrapper',
  'Text-part': 'Hello NodeJs !',
  'Recipients': [{'Email': '[ENTER_HERE]'}],
}

function handleError (err) {
  console.log(err.statusCode);
}
function handlePostResponse (result) {
  console.log(result);
}
sendEmail
.request(emailData)
.then(result => handlePostResponse(result))
.catch(err=>handleError(err));
