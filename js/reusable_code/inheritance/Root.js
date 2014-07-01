var Root = extend(User, {
  constructor: function(login, perms) {
//    this.super("constructor", arguments);
    this.login = login;
    this.perms = perms;
  },
//  getLogin: function() {
//    var superVal = this.super("getLogin", arguments);
//    return "ROOT: " + superVal;
//  },
  getPermissions: function() {
    // ...
  }
});

function testRoot(Root) {
  var login = "ed";
  var perms = ["r", "w", "d", "u"];

  var root = new Root(login, perms);

  assertEqual(root.constructor, Root);
//  assertEqual(root.getLogin(), "ROOT: " + login);
  assertEqual(root.getPermissions(), perms);
}
testRoot(Root);
