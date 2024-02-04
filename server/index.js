const express = require("express")
const mysql = require("mysql2")
const dotenv = require("dotenv")
const queryBuilder = require("./src/utils/utils");
const connection = require("./src/config/db").databaseConnection
const app = express();
const port = 8000

dotenv.config({path: "./.env"})

app.get('/', (req,res) => {
    res.send("hello world!")
})

app.get("/api/courses", (req,res) => {
    let sql = queryBuilder(req.query)
    connection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result)
    });
})

app.listen(port, () => {
    console.log("App is listening on port ", port)
})