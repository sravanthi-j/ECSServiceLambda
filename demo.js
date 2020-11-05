
const request = require('request');

function handler(req, res) {
  request('http://awseb-awseb-59l45lz7u2cm-21912660.us-east-2.elb.amazonaws.com/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("URL is OK") // Print the google web page.
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('URL is OK');
    } else {
      res.writeHead(500, {'Content-Type': 'text/html'});
      res.end('URL broke:'+JSON.stringify(response, null, 2));
    }
  })
};

require('http').createServer(handler).listen(80);


