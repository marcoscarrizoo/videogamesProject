import React, {useState} from 'react';
import {doGoogleLoginAction, logOutAction} from '../../../redux/reducer/userDuck'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { auth } from '../../../firebase';
import useStyles from './signinStyles'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Swal from 'sweetalert2'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignIn() {
  const [email, setEmail ] = useState('')
  const [pass, setPass] = useState('')
  const [msgError, setMsgError] = useState(null)
  const [user, setUser] = useState(null)

  const classes = useStyles();
  const loggedIn = useSelector(store=> store.user.loggedIn)
  const fetching = useSelector(store=> store.user.fetching)
  const dispatch = useDispatch()
  const history = useHistory()

  function doLogin() {
    dispatch(doGoogleLoginAction())
    history.push('/')
    Swal.fire(
      {
        text:'Bienvenido',
        icon: 'success', 
        width:'20rem', 
        timer: '8000', 
        showConfirmButton: false 
      }
    )
  }

  function logOut() {
    dispatch(logOutAction())
  }
  
  const loginUser = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, pass)
    .then(res => history.push('/'), Swal.fire(
      {
        text:'Bienvenido',
        icon: 'success', 
        width:'20rem', 
        timer: '3000', 
        showConfirmButton: false 
      }
    ))
    
    
    .catch(error => {
      if(error.code === 'auth/wrong-password') {
        setMsgError('password incorrecta')
    }
    if(error.code === 'auth/user-not-found') {
        setMsgError('usuario incorrecto')
    }
    if(error.code === 'auth/user-not-found' && 'auth/wrong-password') {
        setMsgError('usuario y password incorrectas')
    }
    })
  
  }
  
 const restorePass = () => {
   auth.sendPasswordResetEmail()
 }
    
  return (
    !loggedIn ? 
    <div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={(e) => {setEmail(e.target.value)}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electronico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
          onChange={(e) => {setPass(e.target.value)}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {msgError != null? <div>{msgError} </div>: <span></span>}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="recordame"
          />
          <div className={classes.button}>
           <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={doLogin}
          >
           Ingresar con google
          </Button>
          <Button
            onClick={loginUser}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
           Ingresar
          </Button>
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="/resetPassword" variant="body2">
                Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {"Crear cuenta"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container> </div> : 
  <span></span>
  
    );
  
  
}