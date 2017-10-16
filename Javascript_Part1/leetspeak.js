
function leetspeak (string) {
  output = []
  leet = ['A', '4', 'E', '3', 'G', '6', 'I', '1', 'O', '0', 'S', '5', 'T', '7']
  for (i = 0; i < string.length; i++) {
    char = string[i]
    if (leet.indexOf(char.toUpperCase()) !=  -1) {
      newChar = leet[leet.indexOf(char.toUpperCase()) + 1]
    }
    else {
      newChar = char
    }
    output.push(newChar)
  }
  return output.join('').toLowerCase()
}

console.log(leetspeak('hello tesing leepspeek: a e g i o s t'))
