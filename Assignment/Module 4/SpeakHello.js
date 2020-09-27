(function (window) {
  var higreeter = {};
  higreeter.greeter = "Hello ";
  higreeter.higreet = function (name) {
    console.log(higreeter.greeter + name);
  }
  window.higreeter = higreeter;
})(window);