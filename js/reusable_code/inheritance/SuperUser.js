var SuperUser = extend(User, {
  constructor: function(login, passwd) {
    this.login = login;
    this.passwd = passwd;
  },
  getPassword: function() {
    return this.passwd;
  }
});

function testSuperUser(SuperUser) {
  var login = "ed";
  var passwd = "#secret!";

  var su = new SuperUser(login, passwd);

  assertEqual(su.getLogin(), login); // inherited from User
  assertEqual(su.getPassword(), passwd);
}
testSuperUser(SuperUser);
