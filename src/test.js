var $ = require("jquery");

function getName () {
  return 'Jim';
};

function getLocation () {
  return 'Munich';
};

function injectInElement(container) {
  $("<p>This text was injected using jquery in the container</p>").appendTo(container);
}

function injectInClass(classSelector) {
  // wait till document is ready 
  $(function() {
    $("<p>This text was injected using jquery with class selector</p>").appendTo(classSelector);
  });
}

const dob = '12.01.1982';

module.exports.getName = getName;
module.exports.getLocation = getLocation;
module.exports.dob = dob;
module.exports.injectInClass = injectInClass;
module.exports.injectInElement = injectInElement;
