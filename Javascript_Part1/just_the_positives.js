// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

    // > positiveNumbers([1, -3, 5, -3, 0])
    // [1, 5, 0]
    // > positiveNumbers([1, 2, 3])
    // [1, 2, 3]
    // > positiveNumbers([-1, -2, -3])
    // []



function positiveNumber(input) {
  positivelist = []
  for (i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positivelist.push(input[i]);
    }
  }
  return positivelist
}

array = [-3, -2, -1, 0, 1, 2, 3]

// console.log(positiveNumber(array))
