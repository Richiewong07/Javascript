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

console.log(positiveNumber(array))
