const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to your Node.js project.');
});

// Sample API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'This is a sample API response.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at 3K`);
});