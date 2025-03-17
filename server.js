require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

// API Route
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from Express.js!" });
});

// Serve HTML Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
