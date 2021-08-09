import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { auth } from '../../../firebase';
import { useHistory } from 'react-router';
import useStyles from './resetStyles'


  
const ResetPassword = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const history = useHistory()

    const resetPassword = () => {
        auth.sendPasswordResetEmail(email)
        .then(res => history.push('/resetPasswordOk'))
        .catch(e => {
            console.log(e)
        })
    }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Restaurar contraseña
        </Typography>
        <form onSubmit={resetPassword} className={classes.form} noValidate>
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
          
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            enviar
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}

export default ResetPassword
