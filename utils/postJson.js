const request = require('request');
const fileInfo = require('./fileAttributes');

function postJson(filename) {
var obj = fileInfo(filename)

    if (obj === {}) {
       console.log("------- directory, return")
       return;
    }
var options = {
    url: 'https://10.99.1.238:9200/win_index/_doc/?pipeline=attachment',
    method: 'POST',
    body: obj,
    json: true,
    auth: {
      user: 'admin',
      pass: 'admin',
      sendImmediately: false
    }
};

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
request(options, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // return value
})
}

module.exports = postJson
