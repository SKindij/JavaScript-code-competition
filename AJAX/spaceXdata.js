// Consecutive requests could be called inside the call back.
let dragonsXHR = new XMLHttpRequest();
dragonXHR.onload = function() {
  const dragons = JSON.parse(this.responseText);
  const id = dragons[0].id;
    console.log(id);  
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    console.log(JSON.parse(this.responseText));
  };
  xhr.open("GET", 'https://api.spacexdata.com/v4/dragons/' + id);
  xhr.send();
};
dragonsXHR.open("GET", 'https://api.spacexdata.com/v4/dragons/');
dragonsXHR.send();  

// With ES6, however, we have fetch API
fetch('https://api.spacexdata.com/v4/dragons/')
  .then(response => response.json())
  .then(data => console.log(data));
// the callbacks will be called by the promise directly, and not through the event loop

// Promises are also useful for handling other asynchronous situations not just API calls
const asyncJob = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Shrek: No!');
    reject({
      place: 'Road'
    });
  });  
});

asyncJob
  .then((data) => {
    console.log(data);
    console.log("Donkey: Oh, finally! Wow!");
  })
  .catch((data) => {
    console.log(data);
    console.log("Donkey: This is why nobody likes ogres.");
  });  
    
// the resolved data is available in the callbacks
const asyncJob = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Fiona: Yes!');
    resolve({
      place: 'Castle'
    });
  });  
});

asyncJob
  .then((data) => {
    console.log(data);
    console.log("Donkey: Oh, finally! Wow!");
  });
  
