let pathToRegExp = require('path-to-regexp');
let pathName = '/user/detail/1/2';
let keys = [];
let reg = pathToRegExp('/user/detail/:id/:name', keys,{end: false})
let [url, b, ...values] = pathName.match(reg);
console.log(url);
console.log(b);
console.log(values);
// console.log(keys);