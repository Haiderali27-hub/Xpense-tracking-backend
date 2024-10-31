const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',               // Your MySQL username
    password: 'nrhm..',    // Your MySQL password
    database: 'xpense_tracker'   // Database you created earlier
});

connection.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = connection;
