var FB = require('fb');

function fetchEvents(appId, secret) {
  var token = appId + '|' + secret
  var url   = '/EACA1980/events?access_token=' + token

  return FB.api(url, 'GET', {});
}

var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
  fetchEvents(process.env.FB_APP_ID, process.env.FB_APP_SECRET).then(function(response) {
    callback(null, response.data);
  });
}
