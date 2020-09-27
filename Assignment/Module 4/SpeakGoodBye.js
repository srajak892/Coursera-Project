(function(window) {
  var byegreeter={};
  byegreeter.greeter = "GoodBye ";
  byegreeter.byegreet = function(name){
    console.log(byegreeter.greeter + name );
  }
  window.byegreeter = byegreeter;

})(window);