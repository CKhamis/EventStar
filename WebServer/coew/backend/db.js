import mysql from "mysql";

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    username: "root",
    password: "1234",
    database: "costi_online",
});

module.exports = db;