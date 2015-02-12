function rangeExampleUsage() {
  // Konstruktor przyjmuje dwa parametry: start i end, definiujące poczatek i koniec obustronnie domknietego przedziału <start, end>
  /*
   * Range represents a [start..end) range
   * Constructor takes two params: start, end
   * */
  var range = new Range(10, 99);
  var otherRange = new Range(-10, 20);

  /* include(number) returns true if number ranges from start to end */
  range.include(21); // => true
  range.include(100); // => false

  /* length() returns length of range */
  range.length(); // => 89

  /* intersectsith(otherRange) returns true if intersection of both ranges is not empty */
  range.intersectsWith(otherRange); // => true

  /* equal(otherRange) returns true if both ranges start and end are same */
  range.equal(otherRange); // => false


  /*intersection(otherRange) returns new Range instance that represents intersection of original ranges */
  range.intersection(otherRange); // => newRange (== new Range(10, 20))

  /* covers(otherRange) returns true if range covers otherRange */
  range.covers(otherRange); // => false
}
