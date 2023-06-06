import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography>
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
