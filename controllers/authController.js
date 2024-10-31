const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connection = require('../config/db');

// Register new user
exports.register = (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        const query = 'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)';
        connection.query(query, [username, email, hash], (error, result) => {
            if (error) throw error;
            res.json({ message: 'User registered successfully!' });
        });
    });
};


// User login
// User login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM Users WHERE email = ?';
    connection.query(query, [email], (error, results) => {
        if (error) throw error;
        if (results.length === 0) return res.status(401).json({ message: 'User not found' });

        const user = results[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) return res.status(401).json({ message: 'Password incorrect' });

            const token = jwt.sign({ id: user.id }, 'secret_key'); // Use an actual secret key
            res.json({ token });
        });
    });
};

