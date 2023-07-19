import Login from "./components/Login/Login";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./components/Home";
import CadUser from "./components/Login/cadUser";
function App() {
  return (<>
    <CssBaseline/>
    <BrowserRouter>
    <Routes>
    <Route path="*" element={<Navigate to="/login" />} />
     <Route path="/login" element={<Login />}/>
     <Route path="/home" element={<Home/>}/>
     <Route path="/caduser" element={<CadUser/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
