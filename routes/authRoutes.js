const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController'); // Ensure the path is correct

// Register new user
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

module.exports = router;

/* const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expenseController');

// Route to add a new expense
router.post('/add', ExpenseController.addExpense);

// Route to get all expenses for a user
router.get('/get', ExpenseController.getExpenses);

// Route to edit an expense
router.put('/edit/:id', ExpenseController.editExpense); // Ensure this line is present

// Route to delete an expense
router.delete('/delete/:id', ExpenseController.deleteExpense);

module.exports = router;
 */