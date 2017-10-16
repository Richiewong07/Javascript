
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
