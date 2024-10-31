const connection = require('../config/db');

// Add new expense
exports.addExpense = (req, res) => {
    const { user_id, amount, category, date, description } = req.body;
    const query = 'INSERT INTO Expenses (user_id, amount, category, date, description) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [user_id, amount, category, date, description], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Error adding expense', error });
        }
        res.json({ message: 'Expense added successfully!' });
    });
};

// Get all expenses for a user
exports.getExpenses = (req, res) => {
    const { user_id } = req.query; // Change this to read from query parameters
    const query = 'SELECT * FROM Expenses WHERE user_id = ?';
    connection.query(query, [user_id], (error, results) => {
        if (error) throw error;
        res.json(results);
    });
};

// Edit an existing expense
exports.editExpense = (req, res) => {
    const { id } = req.params; // Get ID from URL
    const { amount, category, date, description } = req.body;
    const query = 'UPDATE Expenses SET amount = ?, category = ?, date = ?, description = ? WHERE id = ?';
    connection.query(query, [amount, category, date, description, id], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Error updating expense', error });
        }
        res.json({ message: 'Expense updated successfully!' });
    });
};
// Delete an expense
exports.deleteExpense = (req, res) => {
    const { id } = req.params; // Get ID from URL
    const query = 'DELETE FROM Expenses WHERE id = ?';
    connection.query(query, [id], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Error deleting expense', error });
        }
        res.json({ message: 'Expense deleted successfully!' });
    });
};
