function Person(name, dateOfBirth) {
  this.name = name;
  this.dateOfBirth - dateOfBirth;
}

Person.prototype.getName = function() {
  return this.name;
};

Person.prototype.getAge = function() {
  var age = Date.now().getTime() - (new Date(this.dateOfBirth)).getTime();
  return this.name;
};
