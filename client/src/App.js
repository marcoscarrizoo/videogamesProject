import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar';
import Carrousel from './components/Carrousel'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './themeConfig.js'
import AddressForm from './components/checkout/AdressForm';
//import Checkout from './components/checkout/Checkout';
import Review from './components/checkout/Review';
import Checkout from './components/checkout/Checkout';

function App() {
  return (

    <React.Fragment>
      <ThemeProvider theme={theme}>
        <NavBar color='primary'/>
        <Carrousel/> 
        <Home />
      </ThemeProvider>

      <Route exact path='/check' component={Checkout}/>
     

    </React.Fragment>
  );
}

export default App;
