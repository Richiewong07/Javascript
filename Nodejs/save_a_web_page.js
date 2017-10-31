// Write a program to save a web page. Prompt the user for a URL for the web page he wants to save, and for the filename to save to. For example:

    // $ node save_web_page.js
    // URL: https://css-tricks.com/creating-book-cover-using-javascript-p5-js/
    // Save to file: cover-book.html
    // Saved to file cover-book.html
    // As result cover-book.html should have the HTML source code from the entered URL.

// Trigger an error by running the program with an invalid URL, ensure the error is properly displayed. Trigger an error by running the program with an output file in a non-existent directory ,such as thisdirdoesntexist/output.txt, ensure that the error is properly displayed.

var readline = require('readline');
var fs = require('fs');
var request = require('request');
var url = 'https://css-tricks.com/creating-book-cover-using-javascript-p5-js';

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter URL Name: ', function(url) {
  request.get(url, function (error, response, html) {
    if (error) {
      console.error(error.message);
      return;
    };
    rl.question('Filename: ', function(filename) {
      rl.close();
      fs.writeFile('Filename: ', function(filename) {
        if (error) {
          console.log(error.message);
          return;
        };
        console.log('Save to file: ' + filename + '!')
      });
    });
  });
});
