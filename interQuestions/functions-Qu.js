// What is alerted?
function bar() {
    var foo = 11;
      return foo;     
}
alert(typeof bar()); // => number

// What value is alerted?
function foo(a) {
    alert(arguments.lenght);
}
foo(1, 2, 3);  // => undefined

function foo(a) {
    arguments[0] = 2;
    alert(a);
}
foo(1);  // => 2

// What will be returned by code?
var a1 = "wrong";
function a() { this.a1 = "right"; return "1st";};
function a(val) {return "2nd";}
alert(new a().a1);  // => undefined

// What will be code below output to the console? 
function func(x) {
    console.log(typeof x);
    console.log(arguments.length);
}
func();  // => undefined, 0
func('1', '2', '3'); // => string, 3






