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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  user: yup.string().required("Campo obrigatório."),
  password: yup.string().required("Campo obrigatório."),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:3000/login", {
          user: values.user,
          password: values.password,
        });
        if (response.status === 200) {
          navigate("/home");
        } else if (response.status === 400) {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    },
  });
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
      <form onSubmit={formik.handleSubmit}>
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
          <TextField
            label="Usuário"
            name="user"
            size="small"
            fullWidth
            id="user"
            value={formik.values.user}
            onChange={formik.handleChange}
            error={formik.touched.user && Boolean(formik.errors.user)}
            helperText={formik.touched.user && formik.errors.user}
            onFocus={() => setError(false)}
          />

          <TextField
            id="pass"
            size="small"
            fullWidth
            name="password"
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
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {error && (
            <Typography  style={{ color: "#FF0000" }}>
              Usuário ou senha incorretos!
            </Typography>
          )}
          <Button variant="contained" id="login" type="submit">
            Entrar
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Login;
