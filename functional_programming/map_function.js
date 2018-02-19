var animals = [
  { name: 'Fluffy', species: 'dog' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
]

// var names = []
// for (var i = 0; i < animals.length; i++) {
//   names.push(animals[i].name)
// }

var names = animals.map(function(animal) {  // map return transform object to put into new array
  return animal.name + ' is a ' + animal.species
})``

// ES6
// var names = animals.map((animal) => animal.name)

console.log(names)
