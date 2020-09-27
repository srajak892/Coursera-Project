

(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (var i = 0; i < names.length; i++){

    var a = names[i].charAt(0).toLowerCase();
    if( a == "j"){
      window.byegreeter.byegreet(names[i]); 
    }

    else {

      window.higreeter.higreet(names[i]);

    }


  }
})();
