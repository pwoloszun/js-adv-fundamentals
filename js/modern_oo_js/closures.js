/*
 * Calls given function fn as many number many times
 * Usage:
 * var number = 5;
 * number.times(function(i) {
 *   log(i);
 * });
 * */
function times(fn) {
}

// method definition example
Array.prototype.myMethod = function(param1, param2) {
};

/*
 * Calls function fn for each element of array
 * */
function each(fn) {
}

function eachExampleUsages() {
  var names = ["bob", "ed", "kate"];
  names.each(function(name) {
    console.log("Hi " + name);
  });// => logs on console: "Hi Bob", "Hi Kate", "Hi Ed"

  var ints = [1, 2, 3, 4];
  ints.each(function(i) {
    console.log(i);
  }); // => logs on console: 1, 2, 3, 4
}
//eachExampleUsages();


/*
 * Maps array using function fn
 * */
function map(fn) {
}

function mapExampleUsage() {
  var squares = [1, 2, 3].map(function(i) {
    return i * i;
  }); // => [1, 4, 9]

  var greetings = ["Bob", "Ed"].map(function(name) {
    return "Hi " + name + "!";
  }); // => ["Hi Bob!", "Hi Ed!"]
}
//mapExampleUsage();


/*
 * Filters array using boolean function fn and returns new instance
 * containing only filtered elements
 * */
function filter(fn) {
}

function filterExampleUsage() {
  var odds = [1, 2, 3, 4].filter(function(i) {
    return i % 2 === 1;
  }); // => [1, 3]

  var firstLetter = "B";
  var startingWithFirstLetter = ["Kate", "Bob", "Ed", "Ben"].filter(function(name) {
    return name[0].toUpperCase() === firstLetter;
  }); // => ["Bob", "Ben"]
}
//filterExampleUsage();


/*
 * Checks if all elements of array satisfy conditions of boolean function fn
 * Usage:
 * [1, 2, 3].all(function(i) {
 *   return i % 2 === 0;
 * }) => false
 *
 * ["Bob", "Ben", "Bison"].all(function(name) {
 *   return name[0] === "B";
 * }) => true
 * */
function all(fn) {
}

/* shuffle() usage:
 * [1, 2, 3, 4].shuffle() => [2, 4, 1, 3]
 * */
function shuffle() {
}

/*
 * Mutator:
 * insertAt(index, object) usage:
 * ["a", "b", "c"].insertAt(1, "xxx") => ["a", "xxx", "b", "c"]
 * */
function insertAt(index, object) {
}

/*
 * Mutator:
 * deleteAt(index) usage:
 * var arr = ["a", "b", "c"];
 * var deletedObject = arr.deleteAt(1);
 * deletedObject === "b" && arr == ["a", "c"]
 * */
function deleteAt(index) {
}

/*
 * inGroupsOf(groupSize, fillWith) usage:
 * [1, 2, 3, 4].inGroupsOf(2) => [[1, 2], [3, 4]]
 * [1, 2, 3, 4].inGroupsOf(3) => [[1, 2, 3], [4]]
 * [1, 2, 3, 4].inGroupsOf(3, "x") => [[1, 2, 3], [4, "x", "x"]]
 * */
function inGroupsOf(groupSize, fillWith) {
}

/*
 * Returns first (from left) element which satisfy boolean function fn
 * */
function find(fn) {
}

function uniq(fn) {
}


function Person() {

}

Person.prototype.getName = function() {
};

bob = new Person("Bob")
bob.getName();
kate = new Person("kate")
kate.getName();

