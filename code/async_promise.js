'use strict';
const fs = require('fs');
function read(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, str) => {
      resolve(str.replace('Something', 'Else'));
    });
  })
}
function write(path, str) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, str, resolve);
  });
}
read('Readme.md')
  .then((str) => { return write('Readme_promise.md', str); })
  .then(() => { console.log('done'); });
