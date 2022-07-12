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

// What will be in the console?
var num = 2;
function func(num) {
  var num;
    console.log(num);
    num = 5;
}
func(10);  // => 10
console.log(num); // => 2

// What will be returned by code?
var answer = "red";
function f() {this.answer = "green"; return "brown";};
function f(val) {return "blue";}
alert (new f().answer);  // => undefined

// How would you make this work?
const add = (a, b) => {
  if (b !== undefined) return a + b;
    return (d) => a + d
}

add(2, 5); // => 7
add(2)(5); // => 7

// What will the code below output to the console and why?
(function(){
    var a = b = 3; //it is actually shorthand for: b = 3; var a = b;
})();
console.log("a defined? " + (typeof a !== 'undefined')); // => false
console.log("b defined? " + (typeof b !== 'undefined')); // => true

// Consider the two functions below. Will they both return the same thing? 
function foo1()
{
  return {
    bar: "hello"
  };
}

function foo2()
{
  return
  {
    bar: "hello"
  };
}

foo1(); // => {bar: 'hello'}
foo2(); // => undefined

// What will be returned?
var f = function() {
  this.x = 5;
    (function() {
      this.x = 3;
    })();
  console.log(this.x);
};
f(); // => 3 

const details = {
  message: 'JavaScript Tests'
}
function getMessage() {
  return this.message
}
console.log(getMessage.call(details)) // => JavaScript Tests

// What will be in result?
function getInfo(member, year) {
  member.name = 'Linda';
  year = 1988;
}
const persona = {name: 'Sarah'};
const birthSarah = '1987';
getInfo(persona, birthSarah);
console.log(persona, birthSarah); // => {name: 'Linda'} '1987'






