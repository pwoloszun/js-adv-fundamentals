function SuperUser(login, password) {
  this.login = login;
  this.password = password;
}

SuperUser.prototype = new User();
SuperUser.prototype.constructor = SuperUser;

SuperUser.prototype.getLogin = function() {
  return "SU: " + this.login;
};
