import './cards.css' 
import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    
    maxWidth: 345,
    textAlign: 'center',
    marginTop: '40px',
    boxShadow: '0 0 30px',
    background: '#141A32'
  },
  media: {
    height: 200,
  },
  text: {
    color: '#fafafa'
  }
});


const Cards = ({id,name,image,genres}) => {
  const classes = useStyles();
    return (
      
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.text} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" className={classes.text} component="p">
           generos: {genres}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to='/detail'>
          <Button size="small" color="secondary">
            detalle
          </Button>
        </Link>
        <Button size="small" color="primary">
          comprar
        </Button>
      </CardActions>
    </Card>
    
    )
}

export default Cards
