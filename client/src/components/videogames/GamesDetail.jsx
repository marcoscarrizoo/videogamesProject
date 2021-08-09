import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGameDetail, empty } from "../../redux/reducer/gamesDuck";
import styles from './detailStyles'

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import { CardHeader, Button, Container } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const parser = require('html-react-parser')

const GamesDetail = () => {
  const classes = styles();
  const [expanded, setExpanded] = React.useState(false);
  
  const detail = useSelector((store) => store.videogames.videogamedetail);
  

  let renderDetail;
  if (detail && detail.length) {
    
    renderDetail = (
    <div className={classes.container} style={{backgroundImage: `url(${detail[0].image})`, height:'100vh'}}>
      
      
      <Card className={classes.card1}> 
      <CardHeader className={classes.title} title={detail[0].name} />

      <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {detail[0].description}
          </Typography>
      <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            {"Plataformas: " + detail[0].platforms}
          </Typography>
          <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            {"Clasificacion: " + detail[0].rating}
          </Typography>
          <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            {"Fecha de lanzamiento: " + detail[0].released}
          </Typography>
          
          <Button className={classes.button} variant="contained" color='primary'>COMPRAR</Button>
          <Button className={classes.button} variant="contained" color='secondary'>AGREGAR A FAVORITOS</Button>
      </Card>
      </div> 
     
    );
  } else {
    
  }

  const dispatch = useDispatch();
  const { id } = useParams();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    dispatch(getGameDetail(id));
    return function () {
      dispatch(empty());
    };
  }, [dispatch, id]);

  return <div>{renderDetail}</div>;
};

export default GamesDetail;
