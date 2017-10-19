// Allow the caller of counter to initialize the count to the first argument that's passed in.


function counter (count) {
  var actualCount = function() {
    count++;
    return count;
  };
  return actualCount;
}

var count1 = counter(4);
var count2 = counter(10);

console.log(count1())
console.log(count2())
