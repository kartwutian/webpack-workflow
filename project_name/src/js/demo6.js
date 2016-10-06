import $ from "jquery";
$("div").click(function(){
    alert("22222");
  });

var str = "abcdtddddsdsds";
console.log(str.replace(/([a-z])/g,"$1 "));

var content = require('./module.js');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(content());
document.body.appendChild(app);

