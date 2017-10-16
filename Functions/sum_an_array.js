function sum(list) {
  return list.reduce(function(num1, num2) {             //.reduce(function(accumulator, currentValue))
    return num1 + num2;
  })
}

list = [1, 2, 3, 4, 5];

console.log(sum(list))
