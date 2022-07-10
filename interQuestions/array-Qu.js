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
    




