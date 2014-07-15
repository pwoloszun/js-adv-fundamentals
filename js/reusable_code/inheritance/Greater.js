var Greater = extend(null, {
  greet: function() {
    console.log("hi!");
    return 123;
  }
});

function testGreater() {
  var greater = new Greater();
  assertEqual(greater.greet(), 123);
}
testGreater();
