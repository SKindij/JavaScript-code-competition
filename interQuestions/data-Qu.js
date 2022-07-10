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







