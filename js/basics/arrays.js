Array.prototype.myMethod = function(param1, param2) {
  // this is a reference to Array instance, which called meMethod()
};

/*
 * empty() usage:
 * [].empty() => true
 * ["xxx"].empty() => false
 * */
function isEmpty() {
}

/*
 * include(object) usage:
 * [1,2,3].include(3) => true
 * [1,2,3].include(99) => false
 * */
function include(obj) {
}

/* uniq() usage:
 * [1,2,3,1,1,2,1].uniq() => [1, 2, 3]
 * */
function uniq() {
}

// arr.splice(index, deleteCount, objToInsert1, objToInsert2, ...);
/*
 * insertAt(index, object) usage:
 * ["a", "b", "c"].insertAt(1, "xxx") => ["a", "xxx", "b", "c"]
 * */
function insertAt(index, object) {
}

/*
 * deleteAt(index) usage:
 * var arr = ["a", "b", "c"];
 * var deletedObject = arr.deleteAt(1);
 * deletedObject === "b" && arr == ["a", "c"]
 * */
function deleteAt(index) {
}

/* shuffle() usage:
 * [1, 2, 3, 4].shuffle() => [2, 4, 1, 3]
 *
 * */
function shuffle() {
}

/*
 * inGroupsOf(groupSize, fillWith) usage:
 * [1, 2, 3, 4].inGroupsOf(2) => [[1, 2], [3, 4]]
 * [1, 2, 3, 4].inGroupsOf(3) => [[1, 2, 3], [4]]
 * [1, 2, 3, 4].inGroupsOf(3, "x") => [[1, 2, 3], [4, "x", "x"]]
 * */
function inGroupsOf(array, number, fillWith) {
}


function first(array, length) { // ([1, 2, 3, 4], 2) === [1, 2]

}

function last(array, length) { // ([1, 2, 3, 4], 2) === [3, 4]

}

function compact(array) { // ([1, null, "xxx", NaN, undefined, {}]) === [1, "xxx", {}]

}

function deleteElement(array, element) {

}

function fill(array, value, startIndex, length) { // ([1, 2, 3, 4], "x", 1, 2) === [1, "x", "x", 4]

}

function rotate(array, count) { // ([1, 2, 3, 4], 2) === [3, 4, 1, 2]; ([1, 2, 3, 4], -1) === [4, 1, 2, 3];

}

function sample(array, count) { // random element(s)

}

function shuffle(array) {

}

function sum(array) { // ([1,2,3,4]) === 10

}

function many(array) { // true/false

}

function inGroupsOf(array, number, fillWith) { // [1, 2, 3].in_groups_of(2, 997) # => [[1, 2], [3, 997]]

}
