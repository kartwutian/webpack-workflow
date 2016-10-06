require('babel-polyfill');
require("babel-register");

var say = require("./example.js");
console.log(say.say(10));
var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core')
  .transform(es6Code, {
    presets: ['es2015']
  })
  .code;
  console.log(typeof es5Code);
// '"use strict";\n\nvar x = function x(n) {\n  return n + 1;\n};'