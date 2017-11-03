var express = require('express');
var app = express();



app.set('view engine', 'hbs');
app.use('/static', express.static('public'));



app.get('/', function (request, response) {
  // response.send('Hellow World!');
  response.render('helloworld.hbs', {body: 'Hellow World!'});
});


app.get('/cats', function (request, response) {
  // response.send('Meow');
  response.render('cats.hbs', {body: 'Meow'});
});

app.get('/dogs', function (request, response) {
  // response.send('Woof');
  response.render('dogs.hbs', {body: 'Woof'});
});

app.get('/cats_and_dogs', function (request, response) {
  // response.send('Living together');
  response.render('cats_and_dogs.hbs', {body: 'Living together'});
});


// app.get('/greet/:slug', function (request, response) {
//   var slug = request.params.slug;
//   response.send('Hello, ' + slug + '!');
// });
//
//
// app.get('/year', function (request, response) {
//   var age = request.query.age;
//   var year = 2017 - age;
//   response.send('You were born in ' + year + '.');
// });


app.get('/greet/:slug', function (request, response) {
  var slug = request.params.slug;
  var age = parseInt(request.query.age);
  var year = 2017 - age;
  var context = {
    name: slug,
    year: year,
  };
  response.render('greet.hbs', context);
});


app.get("/fav_animals", function(request, response) {
  // var name = request.query.name;
  var animals = [
    { name: 'cats', favorite: true },
    { name: 'dogs', favorite: true },
    { name: 'tree frogs', favorite: true },
    { name: 'earth worms', favorite: false },
    { name: 'guinea pigs', favorite: true },
  ];

  var context = {
    title: 'Favorite Animal Page',
    animals: animals
  };

  response.render('fav_animals.hbs', context);
});





app.listen(8000, function () {
  console.log('Listening on port 8000');
});
