// Human.js
function Human(name) {
  this.name = name;
}

Human.prototype.getName = function() {
  return this.name;
};

// SuperHero.js
function SuperHero(name, powers) {
  this.name = name;
  this.powers = powers;
}

SuperHero.prototype = new Human();

SuperHero.prototype.getName = function() {
  return this.name + "!!!!!!!";
};

// client_code.js
var batman = new SuperHero("Batman", ["fight", "dangerous look"]);

console.log("is Human", batman instanceof Human);
console.log("is SuperHero", batman instanceof SuperHero);
console.log("type of", typeof batman);
console.log("batman constructor", batman.constructor);
