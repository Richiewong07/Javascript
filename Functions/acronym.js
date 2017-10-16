list1 = ['very', 'important', 'person'];
list2 = ['national', 'aeronautics', 'space', 'administration'];


function acronmy(list) {
  return(list.reduce(function (letters, letter) {
    return letters.concat(letter.charAt(0))
  }, [])).join('')
};


console.log(acronmy(list1));
console.log(acronmy(list2));
