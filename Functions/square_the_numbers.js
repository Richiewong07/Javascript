
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function squareTheNumbers(list) {
  return list.map(function(num) {
    return (num * num);
  })
}

console.log(squareTheNumbers(list))
