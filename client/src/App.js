import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/home/Home'
import './app.css'
import GamesDetail from './components/videogames/GamesDetail';
import SignIn from './components/singin_singup/signIn/SignIn';
import SignUp from './components/singin_singup/singUp/SignUp'
import FavPage from './components/FavPage.jsx/FavPage';
import ResetPassword from './components/singin_singup/resetPassword/ResetPassword';
import SendResetSuccess from './components/singin_singup/sendReset/SendResetSuccess';
import NavBar from './components/navBar/NavBar'
import Carrousel from './components/carrousel/Carrousel'
import Cart from './components/cart/Cart';
import Album from './components/destacados/Destacados';

function App() {

  return (
    <React.Fragment>
     
      <Route path='/' component={NavBar} />
      <Route exact path='/' component={Carrousel} />
      <Route exact path='/' component={Home} />

      <Route exact path='/cart' component={Cart} />
      <Route path='/detail/:id' component={GamesDetail} />
      <Route exact path='/signIn' component={SignIn} />
      <Route exact path='/signUp' component={SignUp} />
      <Route exact path='/favorites' component={FavPage} />
      <Route exact path='/destacados' component={Album} />
     
      <Route exact path='/resetPassword' component={ResetPassword} />
      <Route exact path='/resetPasswordOk' component={SendResetSuccess} />
    </React.Fragment>
  );
}

export default App;
