import mysql from "mysql";

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "zrclabs",
});

export default db;
