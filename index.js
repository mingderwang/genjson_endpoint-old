var request = require('request');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to");
    process.exit(-1);
}
var root_path = process.argv[2];
var options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  },
  auth: {
    user: 'admin',
    pass: 'admin',
    sendImmediately: false
  }
};

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
request.get(options, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
})
