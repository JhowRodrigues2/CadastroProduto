import {
  Box,
  FormControl,
  OutlinedInput,
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
          width: "35Ch",
          height: "40ch",
          display: "flex",
          boxShadow: "2",
          padding: "1rem",
          background: "#FFF",
          borderRadius: "0.5rem",
          justifyContent:'space-around'
        }}
        variant="outlined"
      >
        <Icon style={{ width: "100%" }}>
          <DisplaySettingsIcon
            style={{ color: "#4682B4", margin: "0 auto", fontSize: "1.75rem" }}
          />
        </Icon>
        <Typography variant="h5" color={"#4682B4"} margin={"0 auto"}>
          JR SOFTER
        </Typography>
        <TextField label="Usuário" required size="small"
/>

        <OutlinedInput
          id="outlined-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          size="small"

        />
        <Button variant="contained">Entrar</Button>
      </FormControl>
    </Box>
  );
};

export default Login;
