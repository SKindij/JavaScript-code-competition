/*
  The fetch function takes two parameters:
    url - the address to which you want to make a request
    options (optional) - a configuration object where you can set the request method, request body, headers, and more
*/
const newPost = {
  title: "foo",
  body: "bar",
  userId: 1,
}

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // here may be GET, PUT, DELETE too
  body: JSON.stringify(newPost), // request body in JSON format
  headers: {
    // adding necessary headers
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data) // {title: "foo", body: "bar", userId: 1, id: 101}
  })

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
    resolve(backendData);
  }, 2000);
});

p.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data); 
    }, 2000);
  });  
}).then(clientData => {
  console.log('data received', clientData);
})


// to handle a request error, you need to pay attention to the ok field in the Response object
fetch("https://jsonplaceholder.typicode.com/there-is-no-such-route")
  .then((response) => {
    // we check the success of the request and throw an error
    if (!response.ok) {
      throw new Error("Error occurred!")
    }
    return response.json()
  })
  // now let's get here, because an error has been thrown
  .catch((err) => {
    console.log(err)
  }) // Error: Error occurred!








