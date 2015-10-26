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
    console.log("context == ", this);
    console.log("str == ", str);
    console.log("int == ", int);
    console.log("args == ", arguments);
    return Math.random();
  };

  var bob = {
    name: "Bob"
  };

  var result = callInContext(myFunction, bob, "www", 997);
  console.log("myFunction result == ", result);
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

function bindTest() {
  var bob = {
    name: "Bob",
    age: 12
  };
  var myFn = function() {
    assertEqual(this, bob);
    console.log(this, arguments);
    return this.age;
  };

  var bindedFn = bind(bob, myFn);

  var result = bindedFn(123, "qq!");// this === bob
  assertEqual(bob.age, result);

  result = bindedFn.apply({name: "Kate"}, [123, "qq!"]);// this === bob
  assertEqual(bob.age, result);

  var ed = {
    name: "Ed",
    myMethod: bindedFn
  };
  result = ed.myMethod(); // this === bob
  assertEqual(bob.age, result);
}
//bindTest();
