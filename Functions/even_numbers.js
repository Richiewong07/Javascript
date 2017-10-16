var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(list) {
  return list.filter(function(num) {
    return (num %2 === 0);
  })
}

console.log(isEven(list))


// OR
// function isEven(num) {
//   return num % 2 == 0;
// }
//
// var even = list.filter(isEven);
// console.log(even)
