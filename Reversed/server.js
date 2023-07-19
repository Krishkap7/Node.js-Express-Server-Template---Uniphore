// NodeJS Express Server Code (server.js)
const express = require('express');
const app = express();

const port = process.env.NODEJS_PORT || 3000;

// Serve the static HTML file
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`NodeJS server running on http://localhost:${port}`);
});
