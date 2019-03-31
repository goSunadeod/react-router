let pathToRegExp = require('path-to-regexp');
let reg = pathToRegExp('/hone', [],{end: false});
console.log(reg.test('/hone/1/2'));