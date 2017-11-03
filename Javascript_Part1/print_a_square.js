// Write a function printSquare which is given a size and prints a square of that size using asterisks.

    // > printSquare(5)
    // *****
    // *****
    // *****
    // *****
    // *****
    
function printSquare(size) {
  for (var i = 1; i <= size; i++){
    console.log("*".repeat(size));
  }
}
printSquare(5)
