import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/home/Home'
import './app.css'
import Footer from './components/home/Footer'
import GamesDetail from './components/videogames/GamesDetail';

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './themeConfig.js'
import SignIn from './components/singin_singup/SignIn';
import SignUp from './components/singin_singup/SignUp'

function App() {

  return (
    <React.Fragment>
      <div className='container'>
        <div className='home'>
          <Route exact path='/' component={Home} />
        </div>
        <div className='footer'>
          <Route exact path='/' component={Footer} />
        </div>

        <Route path='/detail/:id' component={GamesDetail} />
        <Route exact path='/signIn' component={SignIn}/>
        <Route exact path='/signUp' component={SignUp}/>
      </div>


    </React.Fragment>
  );
}

export default App;
