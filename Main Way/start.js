// NodeJS Express Server Code (server.js)
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Route to generate and return a random number
app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
  res.json({ randomNumber: randomNum });
});

const port = 3000;
app.listen(port, () => {
  console.log(`NodeJS server running on http://localhost:${port}`);
});
