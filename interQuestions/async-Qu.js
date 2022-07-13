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

// What does the following code print?
console.log('one');
  setTimeout(function() {
      console.log('two');
  }, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four'); // => one   four   three   undefined   two

// What will be returned?
for(let i=0; i<10; i++) {
  setTimeout(function() {
    alert(i);
  }, 100);
} // => numbers from 0 to 9

// What will be in result?
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, 'one');
});
const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two');
});
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
// Коли ми надаємо кілька промісів методу Promise.race, він дозволяє/відхиляє перший проміс, який дозволяється/відхиляється.
// => 2

const lindsSettings = {
  userName: 'Linda Bos',
  level: 19,
  health: 90
};
const lindaData = JSON.stringify(lindsSettings, ['level', 'health']);
console.log(lindaData); // => {"level":19,"health":90}







