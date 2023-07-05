const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
app.use(express.json())
app.use(cors());

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"cadproduto"
})



app.get("/", (req, res) => {
db.query("INSERT INTO usuarios (usuario, password) VALUES ('teste','teste')"),(err)=>{
  if(err){
    console.log(err)
  }
}
  res.send('hello word')
});


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
