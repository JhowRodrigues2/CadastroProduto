import React from "react";
import {
  Box,
  FormControl,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Icon,
  Typography,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import axios from "axios";

const CadUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const[name,setName]= useState('')
  const[userLogin,setUserLogin]= useState('')
  const[password,setPassword]= useState('')
  const[confirmOassword,setConfirmPassword]= useState('')
  const [ message, setMessage] = useState('');

  const handleClickShowPassword = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPass") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickRegister=(event)=>{
    event.preventDefault();

  if(password===confirmOassword){
    axios.post("http://localhost:3000/caduser", {
      name:name,
      user:userLogin,
      password: password,

    }).then((response) => {
      event.preventDefault();

    setMessage(response.data.msg); 
    })
    .catch((error) => {
      console.error(error);
    });
    setErrorPass(false)
  }else{
    setErrorPass(true)
  }
}
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleClickRegister}>
      <FormControl
        sx={{
          m: 1,
          width: "35ch",
          height: "40ch",
          display: "flex",
          boxShadow: "2",
          padding: "1rem",
          background: "#FFF",
          borderRadius: "0.5rem",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          textAlign: "center",
        }}
        variant="outlined"
      >
        <Typography variant="h6" color="#4682B4" margin="0 auto">
          Cadastro de Usuário
        </Typography>
        <TextField label="Nome" name="name" size="small" fullWidth onChange={e=>setName(e.target.value)} required />
        <TextField label="usuário" size="small" fullWidth onChange={e=>setUserLogin(e.target.value)} required/>
        <TextField
          id="pass"
          size="small"
          fullWidth
          name="password"
          label="Senha"
          required
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword("password")}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={e=>setPassword(e.target.value)}
        />
        <TextField
          id="confirmPass"
          size="small"
          fullWidth
          name="confirmPass"
          label="Confirmação de Senha"
        required
          type={showConfirmPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword("confirmPass")}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
       onChange={e =>setConfirmPassword(e.target.value)}  />
        <Typography fontSize={14} fontWeight={500} color={message=='Usuário cadastrado!'? '#66bb6a':'error'}>{message}</Typography>
       {errorPass&&<Typography fontSize={14} fontWeight={500} color="error"> Senhas não coincidem.</Typography>}
        <Button variant="contained" id="login" type="submit" >
          <SaveIcon fontSize="small" style={{ marginRight: "10" }} />
          Salvar
        </Button>
      </FormControl>
      </form>
    </Box>
  );
};

export default CadUser;
