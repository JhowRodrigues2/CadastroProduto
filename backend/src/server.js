const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(express.json())
app.use(cors());
require('dotenv').config();
const user = process.env.DB_USER
const password = process.env.DB_PASS
const dbName = process.env.DB_NAME


const db = mysql.createPool({
    host:"localhost",
    user:user,
    password:password,
    database:dbName
})



app.get("/", (req, res) => {
db.query("INSERT INTO usuarios (usuario, password) VALUES ('teste','teste')"),(err)=>{
  if(err){
    console.log(err)
  }
}
  res.send('hello word')
});
app.post("/caduser", (req, res) => {
  const name = req.body.name
  const user = req.body.user;
  const password = req.body.password;
})

app.post('/login', (req, res) => {
  const usuario = req.body.user;
  const password = req.body.password;
  db.query("SELECT * FROM usuarios WHERE usuario = ? AND password = ?", [usuario, password], (err, result) => {
    if (err) {
      res.send(err);
    } if(result.length>0) {
      res.send({msg:'Usuário logado'});
    }else{   
        res.status(400).send()
    }
  })
});


app.listen(3000, () => {
  console.log("Backend rodando porta 3000");
});
