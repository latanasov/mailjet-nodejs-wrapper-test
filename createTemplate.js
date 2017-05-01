var pub_key = '[ENTER_HERE]';
var priv_key = '[ENTER_HERE]'
var Mailjet = require('node-mailjet').connect(pub_key, priv_key);
var sendEmail = Mailjet.post('template');
var templateData = {
  "Name": "Did it work no duplicate name +22!?"
}

function handleError(err) {
  console.log(err.statusCode);
}

function handlePostResponse(result) {
  var data = result.body.Data;
  console.log(data);
}
sendEmail
  .request(templateData)
  .then(result => handlePostResponse(result))
  .catch(err => handleError(err));
