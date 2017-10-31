// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Example:

    // $ node dns_lookup.
    // Domain name: yahoo.com
    // IP Address: 98.139.183.24

// Trigger an error condition by providing an invalid domain. See that the error gets displayed.
//
// Hint: Use require('dns') and dns.lookup.

var readline = require('readline');
var dns = require('dns');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Domain Name:', function(domain) {
  dns.lookup(domain, function(error, ipAddress) {
    if (error) {
      console.error(error.message);
      return;
    };
    console.log("IP Address: " + ipAddress)
  });
  rl.close();
});
