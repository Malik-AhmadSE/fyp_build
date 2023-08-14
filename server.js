const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the React app's index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const port = 5678; // Set the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});