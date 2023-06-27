const express = require("express");

const app = express();
const mysql = require("mysql2");



const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"cadproduto"
})



app.get("/", (req, res) => {
db.query("INSERT INTO usuarios (email, password) VALUES ('admin@admin','admin123')")
  res.send('hello word')
});

app.listen(3000, () => {
  console.log("Backend rodando porta 3000");
});
