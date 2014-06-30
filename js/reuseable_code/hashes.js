Object.prototype.myMethod = function(param1, param2) {
  // this === object instance
};

var obj = {name: "Bobs"};
for (var propertyName in obj) {
}


/*
 * Usage:
 * {name: "Bob", age: 22}.keys() => ['name', 'age']
 * */
function keys() {
}

/*
 * Usage:
 * {name: "Bob", age: 22}.values() => ["Bob", 22]
 * */
function values() {
}

/*
 * Removes hash pair by given key, and returns removed data as array
 * Usage:
 * var hash = {a: 1, b: 2, c: 3};
 * var removed = hash.deleteKey("b");
 * removed == ["b", 2] && hash == {a: 1, c: 3}
 *
 * */
function deleteKey(key) {
}

/*
 * Returns number of hash pairs
 * Usage:
 * {a: 123}.size() => 1
 * {}.size() => 0
 * */
function size() { // ({a: 1, b: 2, c: 3}) === 3
}

/*
 * Returns new hash instance, containing all pairs of original hash except given keys
 * Usage:
 * {a: 1, b: 2, c: 3}.except(["a", "c"]) => {b: 2}
 * */
function except(keys) {
}

// {a: 123, b: "xxx"}.flatten === ["a", 123, "b", "xxx"]
function flatten() { //
}

function empty(hash) { // true/false
}

function hasKey(key) { // true/false
}

function hasValue(value) { // true/false
}

function merge(hash, otherHash) {
}

function reverseMerge(hash, otherHash) {
}

function deepMerge(hash, otherHash) {
}

function shift(hash) { // ({a: 1, b: 2, c: 3}) -> ["a", 1]; hash === {b: 2, c: 3}

}
