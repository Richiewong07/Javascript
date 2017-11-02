// Create Track

// Write a script to create a track.

    // $ node create_track.js
    // Track name? I like crunchy soft
    // Album ID? 2
    // Track Duration? 5:33
    // Create track with ID 13.

    var prompt = require('prompt-promise');
    var pgp = require('pg-promise') ({
    });

    var db = pgp({database: 'album'});
    var track = {name: ' ', albumid: ' ', duration: ' '}
    var q = "Insert INTO track \ VALUES (default, ${name}, ${albumid}, ${duration})";

    prompt("Track name? ")
      .then(function track_name(name) {
        track.name = name;
        return prompt("Album ID? ")
      })
      .then(function album_id(albumid) {
        track.albumid = albumid;
        return prompt("Track Duration? ")
      })
      .then(function track_duration(duration){
        track.duration = duration;
        return db.result(q, track)
      })
      .then(function end_database(q, track) {
        pgp.end();
      })
      .catch(function (error) {
        console.error(error);
        prompt.finish();
    });
