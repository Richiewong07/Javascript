// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

    // > printBanner('Welcome to DigitalCrafts')
    // ****************************
    // * Welcome to DigitalCrafts *
    // ****************************


function printBanner (text) {
  var stars = "*".repeat(text.length + 2)
  var middleRow = ("*" + text + '*\n');
  var fullBox = stars + '\n' + middleRow + stars;
  console.log(fullBox);
}

printBanner ('Welcome to Digital Crafts')
