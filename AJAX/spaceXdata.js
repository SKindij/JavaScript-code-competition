// Consecutive requests could be called inside the call back.
let dragonXHR = new XMLHttpRequest();
  dragonXHR.onload = function() {
    const dragons = JSON.parse(this.responseText);
    const id = dragons[0].id;
      console.log(id);
    


