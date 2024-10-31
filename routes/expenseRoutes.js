const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expenseController');

// Route to add a new expense
router.post('/add', ExpenseController.addExpense);

// Route to get all expenses for a user
router.get('/get', ExpenseController.getExpenses);

// Route to delete an expense by ID
router.delete('/delete/:id', ExpenseController.deleteExpense);

// Route to edit an existing expense
router.put('/edit/:id', ExpenseController.editExpense);

module.exports = router;
