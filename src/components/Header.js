import { AppBar, Container, makeStyles, MenuItem, Select, Toolbar, Typography ,createTheme, ThemeProvider} from '@material-ui/core'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import AuthModel from './Authentication/AuthModel'
import UserSidebar from './Authentication/UserSidebar'


const useStyles=makeStyles(()=>({
    title:{
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))


const Header = () => {
    const classes=useStyles();
    const history=useNavigate();

    const {currency,setCurrency,user}=CryptoState()
    
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });
      
  return (
      <ThemeProvider theme={darkTheme}>
          <AppBar color='transparent' position='static'>
       <Container>
           <Toolbar>
               <Typography onClick={()=>history('/')} className={classes.title} >
                   Crypto World
               </Typography>
               <Select 
               variant='outlined'
               style={{
                   width:100,
                   height:40,
                   marginleft:15
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
               >
                   <MenuItem value={'USD'}>USD</MenuItem>
                   <MenuItem value={'INR'}>INR</MenuItem>

               </Select>
               {user ?<UserSidebar/>:<AuthModel/>}
           </Toolbar>
       </Container>

   </AppBar>
      </ThemeProvider>
   
  )
}

export default Header
