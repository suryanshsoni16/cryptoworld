 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import {makeStyles} from '@material-ui/core';
import Alert from './components/Alert'
function App() {
  const useStyles=makeStyles(()=> ({
    App:{
      backgroundColor:'#243B53',//028FA3
      color:'white',
      minHeight:'100vh',
      
    },

  }))
  const classes=useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/coins/:id' element={<CoinPage/>}/>

        </Routes>
      </div>
      <Alert/>
    </BrowserRouter>
  
  );
}

export default App;
