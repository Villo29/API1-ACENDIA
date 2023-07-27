import mysql from "mysql2/promise";

export function getConnection() {
  return mysql.createConnection({
    host: "50.16.231.135",
    user: "villo",
    password: "1234",
    port: 3306,
    database: "4letras",
  });
}
