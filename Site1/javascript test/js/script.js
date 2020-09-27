// var x;
// if( x ==undefined){

// console.log('x is undefined');

// }

// x =5 ;

// if(x==undefined){

// console.log('x is undefined');  

// }

// else {

// console.log('x has been defined');
// }

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.favcolor = "blue";

// console.log(company["name"]);


// var StockPropName = "Stock vale of Company";
// company[StockPropName]=110;
// console.log("Stock Price is " + [StockPropName])


//Better way to create object//
// var Facebook= {
//     name:"Facebook Co.",
//     ceo:{
//         firstName : "Mark",
//         favColor : "Blue"
//     },
//     "Stock Price of comany" : 110
// };

// console.log(Facebook.ceo["firstName"])
// console.log(Facebook["Stock Price of comany"])
// console.log(Facebook["name"])


//passed by reference

var a = {x:7};
var b = a;
b.x = 5;
console.log(a);
console.log(b);