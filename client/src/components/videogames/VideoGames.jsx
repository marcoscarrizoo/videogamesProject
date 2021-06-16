import React from 'react';
import { useDispatch } from 'react-redux';

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
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

import {getGameDetail, addFavorites} from '../../redux/reducer/gamesDuck'
import './videogames.css'

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



const VideoGames = ({id,name,image,genres, price}) => {
  const classes = useStyles();
  const dispatch = useDispatch()

  function videogameDetail() {
    dispatch(getGameDetail())
    }

    function addFavorite() {
      console.log('click')
      dispatch(addFavorites(id))
    }
    return (
      <div className={classes.main}>
          
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
          <Typography variant="h6" className={classes.text} component="p">
            Precio: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={'/detail/' + id}>
          <Button size="small" color="secondary">
            detalle
          </Button>
        </Link>
        <Button size="small" color="primary">
          comprar
        </Button>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={addFavorite} color='secondary'/>
          </IconButton>
      </CardActions>
    </Card>
    
    </div>
    )
}

export default VideoGames
