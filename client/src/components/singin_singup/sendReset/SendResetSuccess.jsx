import React from "react";
import { Button, Link, Typography } from "@material-ui/core";
import useStyles from "./sendStyles";

const SendResetSuccess = () => {
  const classes = useStyles();
  return (
    <div>
      <Button href="/" variant="outlined" className={classes.button}>
        <Typography component="h1" variant="h4" color="primary">
          SE ENVIO EL LINK A TU CORREO ELECTRONICO PARA <br></br>
          RESTAURAR CONTRASEñA, VOLVER AL MENU PRINCIPAL
        </Typography>
      </Button>
    </div>
  );
};

export default SendResetSuccess;
