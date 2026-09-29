const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_MYSQL_PASSWORD",
    database: "easyshop"
});

connection.connect((error) => {

    if (error) {
        console.log("MySQL connection failed:", error);
        return;
    }

    console.log("MySQL connected successfully!");

});

module.exports = connection;
