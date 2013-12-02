/*
 * Converts arguments to string.
 * Usage:
 * argsToArray(1, null, "imba") => "1, null, imba"
 * */
function argsToString() {
}

/*
 * Returns an Array instance containing all arguments passed to function
 * Usage:
 * argsToArray(1, null, "imba") => [1, null, "imba"]
 * */
function argsToArray() {
}

// Wywola funkcje fn z dowolna iloscia pozostalych parametrow
// (fn, arg1, arg2, ..., argN) => fn(arg1, arg2, ...,  argN)
/*
 * Calls function passed as first parameter fn, with every other param passed to it
 * Usage:
 * callWithArgs(myFunction, 1, "xxx") => myFunction(1, "xxx")
 * callWithArgs(myFunction, [], "a", 123) => myFunction([], "a", 123)
 * */
function callWithArgs(fn) {
  fn()
}
