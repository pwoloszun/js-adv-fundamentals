// TODO: class Evented

// Implement class Evented which provides methods:
// + on(eventName, listenerFn)
// + trigger(eventName, args)
// + off(eventName)

function eventedExampleUsage() {
  var bob = new Evented();
  var other = new Evented();

  bob.on('click', function (number, str) {
    console.log('1st bob "click"', arguments);
  });

  bob.on('click', function () {
    console.log('2nd bob "click"', arguments);
  });

  bob.on('some:event', function (number, str) {
    console.log('1st bob "some:event"', arguments);
  });

  bob.trigger('click', [1, 'qq', -997]); // logged msg on console
  bob.trigger('xxx:yyy', ['imba']); // logged msg on console

  other.trigger('click'); // nothing happens

  bob.off('click');
  bob.trigger('click', [{}, 997.001]); // nothing happens
}

//eventedExampleUsage();
