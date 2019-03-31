let pathToRegExp = require('path-to-regexp');
let pathName = '/user/detail/1';
let reg = pathToRegExp('/user/detail/:id', [],{end: false});
console.log(pathName.match(test));