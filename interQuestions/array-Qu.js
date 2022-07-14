// What value is alerted? 
var arr = [];
  arr[0] = 'a';
  arr[1] = 'b';
  arr[10] = 'c';
  arr.foo = 'd'; // create a property with an arbitrary name
alert(arr.length); // => 11

// it is necessary to duplicate the data inside the array
function duplicate(arr) {
    return arr.concat(arr);
}
duplicate([1,2,3,4,5]);  // => [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    
// What does console.log output?
const set = new Set();
  set.add(1);
  set.add('js tests');
  set.add({name: 'js testos'});
for (let item of set) {
  console.log(item + 2)
}  // => 3, js tests2, [object Object]2

class Something {}
function AnotherSomething() {}
  const s = new Something()
  const as = new AnotherSomething()
console.log(s.toString===Object.prototype.toString) // => true
console.log(as.toString===Object.prototype.toString) // => true

let squares = [2, 4, 6].map(x => x * x);
[a, b] = squares;
console.log(squares); // => [4, 16, 36]
console.log(a + b); // => 20

const getList = ([x, ...y]) => [x, y];
  const list = [1, 2, 3, 4];
console.log(getList(list)); // => [1, [2, 3, 4]]

let aq = new Array(1, 2), bq = new Array(3);
console.log(aq[0] + bq[0]); // => NaN

// What will be in result?
[1, 2, 3].map(num => {
  if (typeof num === 'number') return;
    return num * 2;
}); // => [undefined, undefined, undefined]
// Коли ми не повертаємо значення з функції, функція повертає undefined.

const ourSet = new Set ([1, 1, 2, 3, 3, 4]);
console.log(ourSet); // => Set(4) {1, 2, 3, 4}

const someNumbers = [1, 2, 3, 4, 5];
const [y] = someNumbers;
console.log(y); // => 1, because of destructuring: [a, b] = [1, 2];

// What will be in result?
const value = { number: 10 };
const multiPly = (x = {...value}) => {
  console.log((x.number *=2));
};
multiPly(); // => 20
multiPly(); // => 20
multiPly(value); // => 20
multiPly(value); // => 40

// What does console.log output?
[11, 12, 13, 14].reduce((x, y) => console.log(x, y)); // => 11 12, undefined 13 и undefined 14





