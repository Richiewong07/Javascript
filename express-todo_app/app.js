var express = require('express');
var app = express();
var body_parser = require('body-parser');

var pgp = require('pg-promise')({});

var db = pgp({database: 'todo_app'});

app.set('view engine', 'hbs');
app.use('/static', express.static('public'));

app.use(body_parser.urlencoded({extended: false}));

app.get('/form', function(request, response) {
  response.render('form.hbs');
});

app.post('/submit', function (request, response) {
  console.log(request.body);
  response.send(request.body)
})










app.listen(8000, function () {
  console.log('Listening on port 8000');
});
