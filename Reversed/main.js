// main.js

const randomNumberPlaceholder = document.getElementById('random-number-placeholder');

// Make an HTTP request to the Flask server to get the random number
axios.get('/').then(response => {
  const randomNumber = response.data.random_number;
  randomNumberPlaceholder.textContent = randomNumber;
}).catch(error => {
  console.error('Error fetching random number:', error);
});
