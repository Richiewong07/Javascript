// Write a function that takes two input filenames and one output filename. Read the files and combine the file contents. Write the combined contents to the output file. Use a promise style to chain the reading and writing together.

var fs = require('fs-promise');

var file1 = "file1.txt";
var file2 = "file2.txt";
var file3 = "file3.txt";

var cat2files = function(input1, input2, output) {
  fs.readFile(input1).then(function(buffer) {
    var content = buffer.toString();
    console.log('Read File 1');
    return fs.readFile(input2);
  }).then(function(buffer) {
    content += buffer.toString();
    console.log('Read File 2');
    return fs.writeFile(output, content);
  }).then(function () {
    console.done('Output in File 3');
  }).catch(function (errror) {
    console.log(error);
  })
}

cate2files(file1, file2, file3);
