// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.

    // > printBox(6, 4)
    // ******
    // *    *
    // *    *
    // ******


function printBox(width, height) {
  var stars = "*".repeat(width)
  var middleRow = ("*" + " ".repeat(width - 2) + '*\n').repeat(height-2);
  var fullBox = stars + '\n' + middleRow + stars;

  console.log(fullBox);
}

printBox(6, 4)
