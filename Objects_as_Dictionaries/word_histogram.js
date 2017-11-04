// Write a function wordHistogram which takes a string as argument and tallies the number of times each word appears in the string, and returns the tally as an object. Example:

    // > wordHistogram('to be or not to be')
    // { to: 2, be: 2, or: 1, not: 1 }

function wordHistogram (sentence) {
  var words = sentence.split(' ');
  var count = {};
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word in count) {
      count[word] ++;
    }
    else {
      count[word] = 1;
    }
  }
  return count;
}

console.log(wordHistogram('to be or not to be'))
