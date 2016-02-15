'use strict';
const fs = require('fs');

fs.readFile('Readme.md', 'utf8', function(err, str) {
  let newStr = str.replace('Something', 'Else');

  fs.writeFile('Readme_callback.md', newStr, function(err) {
    // done
  });
});
