const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.APPSETTING_PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the auth routes
app.use('/auth', authRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});