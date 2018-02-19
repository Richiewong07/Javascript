// let dragon = (name, size, element) =>
//   name + ' is a ' +
//   size + ' dragon that breathes ' +
//   element + '!'
//
// console.log(dragon('fluffykins', 'tiny', 'lightning'))

// **********

// let dragon =    //  CHAIN OF FUNCTIONS
//   name =>
//     size =>
//       element =>
//         name + ' is a ' +
//         size + ' dragon that breathes ' +
//         element + '!'
//
// console.log(dragon('fluffykins')('tiny')('lightning'))  // CURRYING ALLOWS FUNCTION TO PASS THROUGH APPLICATION AND RECEIVE THE ARGUEMENT AS IT NEEDS

// *********

//  CURRYING BROKEN DOWN
//
// let fluffykinsDragon = dragon('fluffykins')
// let tinyDragon = fluffykinsDragon('tiny')
// console.log(tinyDragon('lightning'))

// *********

var _ = require('lodash');

let dragon = (name, size, element) =>
  name + ' is a ' +
  size + ' dragon that breathes ' +
  element + '!'
  
dragon = _.curry(dragon)

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')
console.log(tinyDragon('lightning'))
