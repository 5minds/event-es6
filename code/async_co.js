'use strict';
const co = require('co');
const fs = require('fs');

function read(path) {
  return function(done){
    fs.readFile(path, 'utf8', done);
  }
}
function write(path, str, fn) {
  return function(done) {
    fs.writeFile(path, str, done);
  };
}

co(function *(){
  let str = yield read('Readme.md');
  str = str.replace('Something', 'Else');
  yield write('Readme_co.md', str);
});
