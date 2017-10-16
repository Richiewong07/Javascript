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
