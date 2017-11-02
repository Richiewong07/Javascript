// Create Artist

// Write a script to create an artist.

    // $ node create_artist.js
    // Artist name? Fruit Evanglists
    // Created artist with ID 5.

var prompt = require('prompt-promise');
var pgp = require('pg-promise') ({
});

var db = pgp({database: 'album'});
var artist = {name: ' '}
var q = "Insert INTO artist \ VALUES (default, ${name})";

prompt("Artist name? ")
  .then(function artist_name(name) {
    artist.name = name;
    return db.result(q, artist)
  })
  .then(function end_database(q, artist) {
    pgp.end();
  })
  .catch(function (error) {
    console.error(error);
    prompt.finish();
});
