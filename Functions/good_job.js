// Given an array of people's names:

    // var people = [
    //   'Dom',
    //   'Lyn',
    //   'Kirk',
    //   'Autumn',
    //   'Trista',
    //   'Jesslyn',
    //   'Kevin',
    //   'John',
    //   'Eli',
    //   'Juan',
    //   'Robert',
    //   'Keyur',
    //   'Jason',
    //   'Che',
    //   'Ben'
    // ];

// Print out 'Good Job, {{name}}!' for each person's name, one on a line.


var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];


function goodJob(list) {
  list.forEach(function(name) {
    console.log(`Good job ${name}!`);
  })
}

console.log(goodJob(people))
