const mysql = require("mysql2")
require("dotenv").config();

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PSWD
})

connection.connect(err => {
    if(err){
        console.log("Unable to connect to the DB: ", err)
        return null
    }
    console.log("Connected to DB!")
    return connection
})

exports.databaseConnection = connection;
