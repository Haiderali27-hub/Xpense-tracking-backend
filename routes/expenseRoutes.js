const connection = require('../config/db');

// Add new expense
exports.addExpense = (req, res) => {
    const { user_id, amount, category, date, description } = req.body;
    const query = 'INSERT INTO Expenses (user_id, amount, category, date, description) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [user_id, amount, category, date, description], (error, result) => {
        if (error) throw error;
        res.json({ message: 'Expense added successfully!' });
    });
};

// Get all expenses for a user
exports.getExpenses = (req, res) => {
    const { user_id } = req.body;
    const query = 'SELECT * FROM Expenses WHERE user_id = ?';
    connection.query(query, [user_id], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};
