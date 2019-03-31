let pathToRegExp = require('path-to-regexp');
let pathName = '/user/detail/1/2';
let keys = [];
let reg = pathToRegExp('/user/detail/:id/:name', keys,{end: false});
console.log(pathName.match(reg));
console.log(keys);