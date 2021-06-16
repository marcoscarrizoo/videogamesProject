import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGameDetail, empty } from "../../redux/reducer/gamesDuck";
import "./gamesDetail.css";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import { CardHeader, Button } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: '#141A32',
    boxShadow: '0 0 30px',
    
  },
  text: {
    color: '#fafafa'
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const GamesDetail = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const detail = useSelector((store) => store.videogames.videogamedetail);

  let renderDetail;
  if (detail && detail.length) {
    renderDetail = (
      <Card className={classes.root}>
        <CardHeader className={classes.text} title={detail[0].name} />
        <CardMedia className={classes.media} image={detail[0].image} />
        <CardContent>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            {detail[0].description}
          </Typography>
          <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            {"plataformas: " + detail[0].platforms}
          </Typography>
          <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            {"Clasificacion: " + detail[0].rating}
          </Typography>
          <Typography className={classes.text} variant="h6" color="textSecondary" component="p">
            {"Fecha de lanzamiento: " + detail[0].released}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color='secondary'/>
          </IconButton>
          <Button className={classes.text} variant="outlined">COMPRAR</Button>
        </CardActions>
      </Card>
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
