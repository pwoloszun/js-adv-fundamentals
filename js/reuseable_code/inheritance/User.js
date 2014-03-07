function User(login) {
  this.login = login;
}

User.prototype.getLogin = function() {
  return this.login;
};
