var assertEqual = (function() {

  function stringify(obj) {
    return JSON.stringify(obj) || ("" + obj);
  }

  function assertEqual(actual, expected) {
    if (actual !== expected)
      throw new Error("Expected: " + stringify(expected) + ", actual: " + stringify(actual));
  }

  return assertEqual;
})();
