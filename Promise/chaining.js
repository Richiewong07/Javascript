// Using request-promise and fs-promise modules build a function called saveWebPage which takes two parameters, url and filename. The function should chain the two promises together to download the URL and then save the file.

var rp = require("request-promise");
var fs = require("fs-promise");

var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];

var filename = 'chaining.txt';

function saveWebPage(url, filename) {
  rp(url)
    .then(function(response) {
      return fs.outputFile('./Javascript/Promise/' + filename, response)
      .then(function (response) {
        console.log('Webpage is saved!')
      })
    })
    .catch(function (error) {
      console.log('You received an error!');
    })
}

saveWebPage(urls[0], filename);
