import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  if (location.pathname === '/login') {
    return null;
  }
  return (
    <div>
      <AppBar>
        <Toolbar>
        <Typography component={Link} to="/home" variant="h6" color="inherit" style={{ textDecoration: 'none' }}>
                Cadastro de Produto
            </Typography>
       
            <Button  sx={{marginLeft:'auto'}}>
            <AccountCircleIcon style={{color:'#fff'}}/>
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
