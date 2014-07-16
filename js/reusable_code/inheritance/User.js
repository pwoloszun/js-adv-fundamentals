var User = extend(null, {
  constructor: function(login) {
    this.login = login;
  },
  getLogin: function() {
    return this.login;
  }
});

function testUser() {
  var login = "ed";
  var user = new User(login);

  assertEqual(user.constructor, User);
  assertEqual(user.getLogin(), login);
}
testUser();

