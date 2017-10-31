// Add a 1000 millisecond delay to the callback versions of the exercise above.

function add (x, y, callback) {
  setTimeout(function () {
    var result = x + y;
    callback(result);
  }, 4000);
};

add(1, 2, function (result) {console.log(result)});



function subtract (x, y, callback) {
  setTimeout(function () {
    var result = x - y;
    callback(result);
  }, 3000);
};
subtract(1, 2, function (result) {console.log(result)});




function greeting(person, callback) {
  setTimeout(function() {
    var result = 'Hola, ' + person + '!';
    callback(result);
  }, 2000);
};
greeting('Richie', function(result) {console.log(result)});



function product(numbers, callback) {
  setTimeout(function() {
    callback(numbers.reduce(function(a, b) {
    return a * b;
    }, 1))
  }, 1000);
};

var number = [1, 2, 3, 4, 5];
product(number, function(result) {console.log(result)});
