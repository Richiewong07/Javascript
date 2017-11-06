// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

    // > sum([1, 2, 3])
    // 6


list = [1, 2, 3, 4, 5];

function sum(list) {
  return list.reduce(function(num1, num2) {
    return num1 + num2;   //.reduce(function(accumulator, currentValue))
  })
}


console.log(sum(list))
