/* below in comments is the somewhat cumbersome approach
console.log('request data...');
setTimeout(() => {
  console.log('preparing data...');  
  const backendData = {
    server: 'aws',
    port: 2000,
    status: 'working'
  }

  setTimeout(() => {
    backendData.modified = true;
    console.log('data received', backendData);
  }, 2000);
}, 2000);
*/
console.log('request data...');
const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('preparing data...');
      const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
      }
    resolve();
  }, 2000);
});

p.then(() => {
 console.log('promise resolved'); 
});


