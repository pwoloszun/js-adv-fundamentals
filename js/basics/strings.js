for (var i = 0; i < 10; i++) {
}

/*
 * Usage:
 * reverse("abc") => "cba"
 * */
function reverse(string) {
}

/*
 * Usage:
 * reverse("abc xyz") => "cba zyx"
 * */
function reverseEachWord(string) {
  //var arr = string.split("|")
  //arr.join("#")
}

/*
 * Usage:
 * titleize("alice in wonderland") # => "Alice In Wonderland"
 * */
function titleize(string) {
}

/*
 * Usage:
 * truncate("Oh dear! Oh dear! I shall be late!", 7) => "Oh d..."
 * */
function truncate(string, length) {
}




function charAt(string, index) { // for index < 0
}

function removeDuplicateChars(string) {
}

function findFirstUniqChar(string) {

}

function capitalize(string) {

}

function parameterize(string) { // ("John Wall first name") === "john-wall-first-name"

}

function center(string, length, padstr) { // ("abc", 5) === " abc "; ("abc", 10, "XY") === "XYXabcXYXY"

}

function chomp(string, separator) { // ("xxx \n\t ") === "xxx"; ("hello", "lo") === "hel"

}

function blank(string) { // true/false

}

function empty(string) {

}

function squish(string) { // " \n  foo\n\r \t bar \n".squish # => "foo bar"

}

function from(string, index) { //"hello".from(2)  # => "llo" "hello".from(-2) # => "lo"

}

function to(string, index) { //"hello".to(2)  # => "hel" "hello".to(-2) # => "hell"

}

function camelize(string) { // "some-fancy-string" => "SomeFancyString"

}

function insert(string, index, otherString) {

}

function lines(string) { // "imba\nqq\nxxx" === ["imba", "qq", "xxx"]

}

function startWith(string, prefixes) { // "hello".start_with?("heaven", "hell")     #=> true

}

function swapcase(string) { // "Hello".swapcase          #=> "hELLO"

}
