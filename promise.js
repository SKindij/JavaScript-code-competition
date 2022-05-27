console.log('request data...');
/* below in comments is the somewhat cumbersome approach
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
const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('preparing data...');
      const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
      }
  }, 2000);
});




