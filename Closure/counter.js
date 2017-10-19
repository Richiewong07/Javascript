// Make a counter function that returns a function that returns a successive number each time it is called.

function counter (count) {
  var count = 0;
  var actuallyCount = function () {
    count++;
    return count;
  }
  return actuallyCount;
}

var count1 = counter();
var count2 = counter();

console.log(count1())
console.log(count2())
console.log(count1())
console.log(count2())
console.log(count1())
console.log(count2())
