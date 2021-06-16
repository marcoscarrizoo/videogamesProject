import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/reducer/gamesDuck";
import VideoGames from "../videogames/VideoGames";
import { makeStyles } from "@material-ui/core/styles";
import "./home.css";
import Carrousel from "../carrousel/Carrousel";
import NavBar from "../navBar/NavBar";

function Home() {
  //const classes = useStyles()
  const dispatch = useDispatch();
  const games = useSelector((store) => store.videogames.videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  function loading() {
    return <div className="spinner"></div>;
  }

  return (
    <div>
      <NavBar />
      <Carrousel />
      {games.map((e) => (
        <VideoGames
          id={e.id}
          name={e.name}
          image={e.img}
          genres={e.genres}
          price={e.price}
        />
      ))}
    </div>
  );
}

export default Home;
