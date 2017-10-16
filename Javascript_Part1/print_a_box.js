function printBox(width, height) {
  var stars = "*".repeat(width)
  var middleRow = ("*" + " ".repeat(width - 2) + '*\n').repeat(height-2);
  var fullBox = stars + '\n' + middleRow + stars;

  console.log(fullBox);
}

printBox(6, 4)
