var xxx = "global";

function outerFn() {
  var xxx = "outerFn";

  function innerFn1() {
    xxx = "innerFn1";

    function innerFn2() {
      var xxx = "innerFn2";

    }

    innerFn2();
    console.log("After innerFn2", xxx);
  }

  innerFn1();
  console.log("After innerFn1", xxx);
}

outerFn();
console.log("After outerFn", xxx);
