function counterExampleUsage() {
  var params = {
    duration: 20, // in sec, default: Infinity
    step: 2 // in sec, default: 1
  };
  var timer = new Timer(params);

  // on(eventName, listener) - assigns listener to given eventName ("start", "pause", "tick", "end")
  // triggered when timer is started
  timer.on("start", function(currentTime) {
    log("started at: " + currentTime);
  });

  // triggered when timer finishes or has been stoped
  timer.on("end", function(currentTime) {
    log("ended at: " + currentTime);
  });

  // triggered when timer is paused
  timer.on("pause", function(currentTime) {
    log("paused at: " + currentTime);
  });

  // triggers every step seconds
  timer.on("tick", function(currentTime) {
    log("current time: " + currentTime);
  });

  // start() - starts timer
  timer.start();

  // pause() - pauses counter
  timer.pause();

  // stop() - stops counter
  timer.stop();
}
