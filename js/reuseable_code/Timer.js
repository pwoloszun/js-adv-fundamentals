// var intervalId = setInterval(fn, delay);
// clearInterval(intervalId);

function counterExampleUsage() {
  var params = {
    duration: 20, // in sec, default: Infinity
    step: 2 // in sec, default: 1
  };
  var timer = new Timer(params);

  // on(eventName, listener) - assigns listener to given eventName ("start", "pause", "tick", "end")
  // triggered when timer is started
  timer.on("start", function(currentStep) {
    console.log("started at: " + currentStep);
  });

  // triggered when timer finishes or has been stoped
  timer.on("end", function(currentStep) {
    console.log("ended at: " + currentStep);
  });

  // triggered when timer is paused
  timer.on("pause", function(currentStep) {
    console.log("paused at: " + currentStep);
  });

  // triggers every step seconds
  timer.on("tick", function(currentStep) {
    console.log("current time: " + currentStep);
  });

  // start() - starts timer
  timer.start();

  // pause() - pauses timer
  setTimeout(function() {
    timer.pause();
  }, 5000);

  setTimeout(function() {
    timer.start(); // resumes timer
  }, 7000);

  // stop() - stops timer
  setTimeout(function() {
    timer.stop();
  }, 12000);
}
//counterExampleUsage();
