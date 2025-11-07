const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// This is the absolute path to your built Angular files (confirmed by last diagnosis)
const ANGULAR_BUILD_PATH = path.join(__dirname, '..', 'mean-stack-frontend', 'dist', 'mean-stack-frontend'); 

// 1. Point static path to the Angular build directory
app.use(express.static(ANGULAR_BUILD_PATH));

// 2. API Endpoint for the Angular Frontend 
app.get('/api', (req, res) => {
    res.send('Welcome to MEAN Stack');
});

// 3. Default route: all other requests go to Angular's index.html
app.get(/.*/, (req, res) => { 
    res.sendFile(path.join(ANGULAR_BUILD_PATH, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
