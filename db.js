import mysql from "mysql"

export const db = mysql.createConnection({
    host: "b3xgmekvwfhjotxnd1me-mysql.services.clever-cloud.com",
    user: "ukcj0cmydq9ibx1t",
    password: "uVBZNKHnpdhXYv9L5vJs",
    database: "b3xgmekvwfhjotxnd1me"
})