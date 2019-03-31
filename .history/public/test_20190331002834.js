let pathToRegExp = require('path-to-regexp');
let reg = pathToRegExp('/user/detail/:id', [],{end: false});
console.log(reg.test('/hone/1/2'));