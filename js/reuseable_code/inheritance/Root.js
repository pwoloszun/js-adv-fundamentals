var Root = extend(User, {
  constructor: function(login, perms) {
//    this.super("constructor", arguments);
    this.login = login;
    this.perms = perms;
  },
//  getLogin: function() {
//    var superVal = this.super("getLogin", arguments);
//    return "SU: " + superVal;
//  },
  getPermissions: function() {
    // ...
  }
});

function extendExampleUsage() {
  var root = new Root("bob", ["r", "w", "d", "u"]);
  console.log(root.getLogin());
  console.log(root.getPermissions());
}


var Human = extend(Animal, {
  speak: function() {}
});
