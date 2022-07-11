// How can you get the first word the string?
const text = 'Hello world';

text.slice(0,5);
text.replace(' world', '');
text.split(' ')[0];

// what statements are true?
const a = NaN;
a == a; // => false

const b = {}; 
b == b; // => true

typeof null == 'object'; // => true
!![] == true; 	// => true

// What will the code below output to the console?
console.log(+"1" + "1" + "2"); // => 112
console.log( "A" - "B" + "2"); // => NaN2
console.log( "A" - "B" + 2); // => NaN

console.log(typeof 1); // => number
console.log(typeof String); // => function
console.log(typeof typeof 1); // => string

// What does the above statement evaluate to?  
4 + 3 + 2 + "1"; // => '91'

// What does console.log output?
var result = "ten" * 2;
console.log(result===NaN); // => false

typeof NaN; // => 'number'
typeof null; // => 'object'

// What will be returned by each of these?
console.log("hello" || "world") // => hello
console.log("foo" && "bar") // => bar

console.log(0.1 + 0.2 == 0.3); // => false

// What value is returned from the following statement?
"i'm a lasagna hog".split("").reverse().join(""); // => "goh angasal a m'i"

let incro = 10, decro = 10;
console.log(incro, incro++, incro); // 10 10 11
console.log(decro, decro--, decro); // 10 10 9

let incra = 10, decra = 10;
console.log(incra, ++incra, incra); // 10 11 11
console.log(decra, --decra, decra); // 10 9 9

let q = 5;
alert(q++); // => 5

alert( '1'[0] ); // => 1

console.log(+false); // => 0
console.log(+true); // => 1
console.log(+null); // => 0

console.log(Number.isNaN('stringo')); // => false
console.log(isNaN('stringo')); // => true




