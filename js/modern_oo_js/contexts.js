/*
 * Calls given function fn in context of object contextObj, with every
 * other parameter passed to function
 * Usage:
 * callInContext(myFunction, myObject, 1, "xxx", [])
 * */
function callInContext(fn, contextObj) {
}

function callInContextExampleUsage() {
  var myFunction = function(str, int) {
    // this === bob
    console.log(this, arguments);
    return Math.random();
  };

  var bob = {
    name: "Bob"
  };

  var result = callInContext(myFunction, bob, "www", 997);
  console.log(result);
}
//callInContextExampleUsage();

/*
 * console.log() shortcut
 * */
function log() {
}

/*
 * Binds function fn to context contextObj, and returns binded function
 * Each time binded function is called, its called in context of contextObj
 * */
function bind(contextObj, fn) {

}

function bindExampleUsage() {
  var bob = {name: "Bob"};
  var myFn = function() {
    console.log(this, arguments);
    return Math.random();
  };
  var bindedFn = bind(bob, myFn);

  var result = bindedFn(123, "qq!");// this === bob
  console.log("1st result:", result);

  result = bindedFn.apply({name: "Kate"}, [123, "qq!"]);// this === bob
  console.log("2nd result:", result);

  var ed = {
    name: "Ed",
    myMethod: bindedFn
  };
  result = ed.myMethod(); // this === bob
  console.log("3rd result:", result);
}
