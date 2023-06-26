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
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "#4682B4",
      }}
    >
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
          justifyContent:"space-evenly",
          alignItems: "center",
          textAlign: "center",
        }}
        variant="outlined"
      >
        <Typography variant="h5" color="#4682B4" margin="0 auto">
          <Icon style={{ width: "100%" }}>
            <DisplaySettingsIcon
              style={{
                color: "#4682B4",
                margin: "0 auto",
                fontSize: "1.75rem",
              }}
            />
          </Icon>
          JR SOFTER
        </Typography>
        <TextField label="Usuário" required size="small" fullWidth  id="user"/>
        <TextField
        id="pass"
          size="small"
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" id="login">Entrar</Button>
      </FormControl>
    </Box>
  );
};

export default Login;
