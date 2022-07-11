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








