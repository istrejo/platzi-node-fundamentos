const fs = require('fs');

function read(path, cb) {
  fs.readFile(path, (err, data) => {
    console.log(data.toString());
  });
}

function write(path, content, cb) {
  fs.writeFile(path, content, function (err, data) {
    if (err) {
      console.err('I can´t write this file');
    } else {
      console.log('File created successfuly');
    }
  });
}

function borrar(path, cb) {
  fs.unlink(path, cb);
}

// read(__dirname + '/file.txt');
// write(__dirname + '/file1.txt', "What's up developers", console.log);
borrar(__dirname + '/file1.txt', console.log);
