var animals = [
  { name: 'Fluffy', species: 'dog' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

// var dogs = []
// for (var i = 0; i < animals.length; i++) {
//   if(animals[i].species === 'dog') {
//     dogs.push(animals[i].name)
//   }
// }


var dogs = animals.filter(function(animal) {    // filter returns true/false value to determine if it should be in the array or not
  return animal.species === 'dog'
})

console.log(dogs)

//  filter function broken down

// var isDog = function(animal) {
//   return animal.species === 'dogs'
// }
//
// var dogs = animals.filter(isDog)
