const express = require('express');
const axios = require('axios');
const app = express();

const port = process.env.NODEJS_PORT || 3000;

// Serve the static HTML file
app.use(express.static(__dirname));

// Route to fetch the random number from the Python Flask server

app.get('/random-number', async (req, res) => {
  try {
    // Replace 'http://localhost:5000' with the address of your Python Flask server
    const response = await axios.get('http://127.0.0.1:5000/random-number');
    const random_number = response.data.random_number;
    //res.send(`${random_number}`);
    res.json({ random_number: random_number });
  } catch (error) {
    console.error('Error fetching random number:', error);
    res.status(500).send('Error fetching random number');
  }
});

app.listen(port, () => {
  console.log(`NodeJS server running on http://localhost:${port}`);
});

