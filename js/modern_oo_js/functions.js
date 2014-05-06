/*
 * Converts arguments to string.
 * Usage:
 * argsToArray(1, null, "imba") => "1, null, imba"
 * */
function argsToString() {
}

function argsToStringExampleUsage() {
  argsToString(1, 'qq', [], 997); // => "1, qq, Object[], 997"
}
//argsToStringExampleUsage();


/*
 * Returns an Array instance containing all arguments passed to function
 * Usage:
 * argsToArray(1, null, "imba") => [1, null, "imba"]
 * */
function argsToArray() {
}

/*
 * Calls function passed as first parameter fn, with every other param passed to it
 * Usage:
 * callWithArgs(myFunction, 1, "xxx") => myFunction(1, "xxx")
 * callWithArgs(myFunction, [], "a", 123) => myFunction([], "a", 123)
 * */
function callWithArgs(fn) {

}

function callWithArgsExampleUsage() {
  var myFunction = function() {
    console.log(arguments);
  };

  myFunction(1, "qq", []);
  callWithArgs(myFunction, 1, "qq", []); // => 1, "qq", []
}
//callWithArgsExampleUsage();
