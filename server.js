const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes'); // Import the expense routes

const app = express();

// Middleware to parse JSON requests
app.use(express.json()); // This is sufficient for parsing JSON

// Use the authentication routes
app.use('/auth', authRoutes);
// Use the expense routes
app.use('/expenses', expenseRoutes); // Set the base URL for expenses

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
