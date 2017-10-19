// Allow the counter to either increment 1 or decrement by 1 by calling the increment and decrement methods, respectively. Note: now the counter needs to return an object rather than a function.

function counter(count) {
  var object = {
    increment: function() {return count += 1;},
    decrement: function() {return count -= 1;}
  };
  return object;
}

var count = counter(4);

console.log(count.increment());
console.log(count.increment());
