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
 * Usage:
 * [1,2,3].each(function(i) {
 *   log(i);
 * }) => logs on console: 1, 2, 3
 * */
function each(fn) {
}

/*
 * Maps array using function fn
 * Usage:
 * ["Kate", "Bob"].map(function(name) {
 *   return "Hello " + name;
 * }) => ["Hello Kate", "Hello Bob"]
 * */
function map(fn) {
}

/*
 * Filters array using boolean function fn and returns new instance
 * containing only filtered elements
 * Usage:
 * [1,2,3,4].filter(function(i) {
 *  return i % 2 === 0;
 * }) => [2, 4]
 *
 * ["Kate", "Bob", "Ed", "Ben"].filter(function(name) {
 *  return name[0] === "B";
 * }) => ["Bob", "Ben"]
 * */
function filter(fn) {
}

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
