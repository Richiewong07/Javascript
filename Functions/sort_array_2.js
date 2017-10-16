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



function lengthSort(list) {
  return list.sort(function(name1, name2) {
    if (name1.length > name2.length) {
      return 1;
    }
    else if (name1.length < name2.length) {
      return -1;
    }
    else if (name1.length == name2.length) {
      return 0;
    }
  })
}

console.log(lengthSort(people))
