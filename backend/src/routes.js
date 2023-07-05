const express = require('express');
const routes = express.Router();

routes.post('/login',(req,res)=>{
    const {usuario,password} = req.body
    res.send(usuario)
    res.send(password)

})
routes.get('/home', (req, res) => {
    res.send('Página home');
  });
  
module.exports = routes;