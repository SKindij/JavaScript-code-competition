// In what order will the numbers 1-4 be logged to the console when the code below is executed?
(function() {
    console.log(1);
      setTimeout(function() {
        console.log(2);
      }, 1000);
     setTimeout(function() {
        console.log(3);
      }, 0);
        console.log(4);
}) (); // => 1, 4, 3, 2






