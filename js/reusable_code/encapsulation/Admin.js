/*
 * new Admin(params) class:
 * Public properties:
 * + uuid (generated using private static method _GENERATE_UUID()
 * Private properties:
 * - password
 * Privileged methods:
 * + getLogin()
 * + setLogin(value)
 * + getEncodedPassword()
 * Private methods:
 * - _encodePassword(passwd) (encoded using private static property ENCODING_KEY)
 * Private static properties:
 * - NEXT_UUID = 0
 * - ENCODING_KEY = "imba!"
 * Private static methods:
 * - _GENERATE_UUID() (generates next uniq UUID)
 * */
function adminTest(Admin) {
  var login = "Bob";
  var passwd = "#secret!";

  var admin = new Admin({
    login: login,
    password: passwd
  });

  assertEqual(admin.uuid, 1);
  assertEqual(admin.getLogin(), login);
  login = "kate";
  admin.setLogin(login);
  assertEqual(admin.getLogin(), login);
  assertEqual(admin.getEncodedPassword(), passwd + "imba!");

  var login2 = "Kate";
  var passwd2 = "#huhu!";
  var admin2 = new Admin({
    login: login2,
    password: passwd2
  });
  assertEqual(admin2.uuid, 2);
  assertEqual(admin2.getLogin(), login2);
  assertEqual(admin2.getEncodedPassword(), passwd2 + "imba!");
}

//adminTest(MyApp.Models.Admin);
