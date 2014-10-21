function Person(name, dateOfBirth) {
  this.name = name;
  this.dateOfBirth = dateOfBirth;
}

Person.prototype.getName = function() {
  return this.name;
};

Person.prototype.getAge = function() {
  var msInYear = 365 * 24 * 60 * 60 * 1000;
  var nowMs = Date.now();
  var dobMs = (new Date(this.dateOfBirth)).getTime()
  var age = nowMs - dobMs;
  return age / msInYear;
};

var bob = new Person("Bob", "1996-01-14");
console.log(bob.getName(), bob.getAge());
