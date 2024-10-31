const express = require('express');
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct

const app = express();

// Middleware to parse JSON requests
app.use(express.json()); // This is sufficient for parsing JSON

// Use the authentication routes
app.use('/auth', authRoutes); // Ensure this line is present

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
