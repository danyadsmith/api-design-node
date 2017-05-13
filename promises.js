

// var action = function () {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve('hey');
//       reject(new Error('Promise broken...'));
//     }, 5000);
//   });
// };

// action()
//   .then(function (word) {
//     console.log(word);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });


var fs = require('fs');


// fs.readFile('./package.json', function (err, file) {
//   console.log('Reading the file...', file.toString());
// });

// console.log('After file read...');

var readFile = function () {
  return new Promise(function (resolve, reject) {
    fs.readFile('./package.json', function (err, file) {
      return err ? reject(err) : resolve(file.toString());
    });
  });
};

var logFile = function () {
  return readFile()
    .then(function () {
      readFile();
    });
};

readFile()
  .then(logFile())
  .then(function (file) {
    console.log(file);
  })
  .catch(function (err) {
    console.log(err);
  });
