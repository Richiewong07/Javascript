// Write a promise that adds two numbers and resolves the answer. However, if the two inputs provided are not both numbers reject the promise. The API should work like the following:

    // addNumbers(x, y)
    //   .then(function (answer) {
    //     console.log(answer);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

function addNumbers (x,y) {
  var promise = new Promise(function (resolve, reject) {
    try {
      var sum = x + y;
      resolve(sum);
    } catch (error) {
      reject (error)
    }
  });
  return promise;
}

var total = function (x,y) {
  addNumbers(x,y).then(function (sum) {
    console.log(sum);
  })
  .catch(function(error) {
    console.log(error);
  });
}

total(5,2);
