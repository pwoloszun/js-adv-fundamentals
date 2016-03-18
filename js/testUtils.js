var assertEqual = (function () {
  function stringify(obj) {
    return JSON.stringify(obj) || ("" + obj);
  }

  function assertEqual(actual, expected) {
    var msg = "Expected: " + stringify(expected) + ", actual: " + stringify(actual);
    console.assert(actual === expected, msg);
  }

  return assertEqual;
})();
