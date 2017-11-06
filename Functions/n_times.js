// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

    // > callNTimes(5, hello)
    // Hello, world!
    // Hello, world!
    // Hello, world!
    // Hello, world!
    // Hello, world!

// You are allowed to use a loop in the implementation of callNTimes.


function hello() {
  console.log('Hello world!')
};
function callNTimes(num, fun) {
  for(let i = 0; i < num; i++) {
    fun()
  }
}
console.log(callNTimes(5,hello))


//OR

function callnTimes(num, fun) {
  for(let i = 0; i < num; i++){
    fun();
  }
}

callnTimes(5, function() {
  console.log("Hello, World!");
})
