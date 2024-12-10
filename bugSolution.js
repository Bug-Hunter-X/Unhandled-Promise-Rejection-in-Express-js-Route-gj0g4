const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  try {
    const response = await someExternalAPI();
    return response;
  } catch (error) {
    throw error; // Re-throw the error to be caught by the route handler
  }
}

async function someExternalAPI(){
  //Simulate an external api call that may fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a failure condition
      reject(new Error('External API call failed'));
    }, 1000);
  });
}