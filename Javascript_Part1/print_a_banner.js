function printBanner (text) {
  var stars = "*".repeat(text.length + 2)
  var middleRow = ("*" + text + '*\n');
  var fullBox = stars + '\n' + middleRow + stars;
  console.log(fullBox);
}

printBanner ('Welcome to Digital Crafts')
