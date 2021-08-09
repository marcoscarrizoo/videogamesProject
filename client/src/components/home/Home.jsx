import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getVideogames } from "../../redux/reducer/gamesDuck";
import VideoGames from "../videogames/VideoGames";
import "./homeStyles.jsx";
import Pagination from "@material-ui/lab/Pagination";
import styles from "./homeStyles";
import './home.css'

function Home() {
  const classes = styles();
  const dispatch = useDispatch();
  const games = useSelector((store) => store.videogames.videogames);

  //Pagination State
  const [page, setPage] = React.useState(1);
  const [gamesPerPage] = useState(20);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  //setting items to paginate
  const last = page * gamesPerPage;
  const first = last - gamesPerPage; //10-10
  const show = games.slice(first, last); // slice(0,10) [0, ....., 9]

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div className='home-container'>
      {show.map((e) => (
        <VideoGames
          id={e.id}
          name={e.name}
          image={e.img}
          genres={e.genres}
          price={e.price}
        />
      ))}

     
        <Pagination
          count={5}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
        />
      
    </div>
  );
}

export default Home;
