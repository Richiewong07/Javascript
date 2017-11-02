// Create album

// Write a script to create a new album in the database. You may either connect to your local database or your remote database. The script will prompt the user for an album name, a year, and an artist ID. You may use the prompt-promise module to get user prompts in the promise style - with this everything can be written in one straight chain. Be sure to sanitize your inputs!

// Example session:

    // $ node create_album.js
    // Album name? The Squeezed Apple
    // Album year? 1998
    // Artist ID? 4
    // Created album with ID 2.c

var prompt = require('prompt-promise');
var pgp = require('pg-promise') ({
});
var db = pgp({database: 'album'});

var album = {name: ' ', year: ' ', artistid: ' '};

var q = "INSERT INTO album \ VALUES (default, ${name}, ${year}, ${artistid})";


prompt('Album name?: ')
.then(function album_name(name) {
  album.name = name
  return prompt("Album year?: ");
})
.then(function album_year(year) {
  album.year = year
  return prompt("Artist ID?: ");
})
.then(function album_artistid(artistid) {
  album.artistid = artistid
  return db.result(q, album);
})
.then(function end_database(q, alum) {
  pgp.end();
})
.catch(function (error) {
  console.error(error);
  prompt.finish();
});
