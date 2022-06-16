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
  
  
  

