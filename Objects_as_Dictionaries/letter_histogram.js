// Write a function letterHistogram which takes a string as argument. It will tally(histogram) the number of times each character appears in the string, and return the tally as an object. Example:

    // > letterHistogram('bananas')
    // { b: 1, a: 3, n: 2, s: 1 }
    // Note: the order of the keys doesn't matter.


function letterHistogram (word) {
  var count = {};
  for (i = 0; i < word.length; i ++) {
    var char = word[i];
    if (char in count) {
      count[char] ++;
    }
    else {
      count[char] = 1;
    }
  }
  return count;
}

console.log(letterHistogram('bananas'))
