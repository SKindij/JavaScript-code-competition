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

