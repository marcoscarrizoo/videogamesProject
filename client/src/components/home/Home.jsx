import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/reducer/gamesDuck";
import VideoGames from "../videogames/VideoGames";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";
import "./home.css";
import Carrousel from "../carrousel/Carrousel";
import NavBar from "../navBar/NavBar";
import Pagination from "@material-ui/lab/Pagination";
import Footer from '../home/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      
    },
    background: '#708090',
    display: 'flex',
    justifyContent: 'center',
   
  },
  conteiner: {
    display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridAutoRows: 'auto',
  gridGap: '1rem',
  }
}));

function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const games = useSelector((store) => store.videogames.videogames);

  //Pagination State
  const [page, setPage] = React.useState(1);
  const [gamesPerPage] = useState(20);

  const handleChange = (event, value) => {
    setPage(value);
  };
  //setting items to paginate
  const last = page * gamesPerPage;
  const first = last - gamesPerPage; //10-10
  const show = games.slice(first, last); // slice(0,10) [0, ....., 9]

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Carrousel />
      <div className={classes.conteiner}>
      {show.map((e) => (
      
        
        <VideoGames
          id={e.id}
          name={e.name}
          image={e.img}
          genres={e.genres}
          price={e.price}
        />
      
      ))}
      </div>

      <div className={classes.root}>
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      </div>
     
    </div>
  );
}

export default Home;
