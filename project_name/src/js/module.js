// module.js

function generateText() {
  var element = document.createElement('h2');
  element.innerHTML = "It works from module.js.";
  return element;
}

module.exports = generateText;
