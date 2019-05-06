function timerApp() {
  var params = {
    duration: 10, // in sec, default: Infinity
    step: 2 // in sec, default: 1
  };
  var timer = new Timer(params);

  // on(eventName, listener) - assigns listener to given eventName ("start", "pause", "tick", "end")
  // triggered when timer is started
  timer.on("start", function (currentStep) {
    console.log("started step no.", currentStep);
  });

  // triggered when timer finishes or has been stopped
  timer.on("end", function (currentStep) {
    console.log("ended step no.", currentStep);
  });

  // triggered when timer is paused
  timer.on("pause", function (currentStep) {
    console.log("paused step no.", currentStep);
  });

  // triggers every step seconds
  timer.on("tick", function (currentStep) {
    console.log("tick step no.", currentStep);
  });

  // start() - starts timer
  timer.start();

//  // pause() - pauses timer
//   setTimeout(function() {
//     timer.pause();
//   }, 5000);
//
//   setTimeout(function() {
//     timer.start(); // resumes timer
//   }, 8000);
//
//   // stop() - stops timer
//   setTimeout(function() {
//     timer.stop();
//   }, 14000);
//
//   // start again from currentStep == 0
//   setTimeout(function() {
//     timer.start();
//   }, 19000);
}

// timerApp();


