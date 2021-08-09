import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./gamesStyles";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './games.css'

import {
  getGameDetail,
  addFavorites,
  getVideogames,
} from "../../redux/reducer/gamesDuck";

const VideoGames = ({ id, name, image, genres, price }) => {
  const classes = styles();
  const dispatch = useDispatch();
  const [idFav, setIdFav] = useState('')
  function videogameDetail() {
    dispatch(getGameDetail());
  }

  function addFavorite() {
    
    dispatch(addFavorites());
  }

  return (
    <div className={classes.games}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography
              className={classes.text}
              gutterBottom
              variant="h5"
              component="h2"
            >
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
          <Link to={"/detail/" + id}>
            <Button size="small" color="secondary">
              detalle
            </Button>
          </Link>
          <Button size="medium" color="primary">
            comprar
          </Button>
          
          
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={() =>{addFavorite(id)}} color="secondary" />
          </IconButton>
          <IconButton color='primary'>
            <AddShoppingCartIcon/>

          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default VideoGames;
