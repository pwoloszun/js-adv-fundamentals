function assertEqual(actual, expected) {
  if (actual !== expected)
    throw "Expected: " + JSON.stringify(expected) + ", actual: " + JSON.stringify(actual);
}
