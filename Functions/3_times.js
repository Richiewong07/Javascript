
// Given this function:

    // function call3Times(fun) {
    //   fun();
    //   fun();
    //   fun();
    // }

// Use the call3Times function to print "Hello, world!" 3 times.


function hello() {
  console.log('Hello world')
};
function call3Times(fun) {
  fun();
  fun();
  fun();
}

console.log(call3Times(hello));

//OR

call3Times(function() {
  console.log("Hello, World!");
});
