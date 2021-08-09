import { makeStyles } from "@material-ui/core";

export default makeStyles({
 text: {
    color: "black",
    display: "flex",
    alignItems: "flex-end",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    height: "300px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    backgroundPosition: "center",
   backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
    transition: "0.4s",
  },

  card1: {
    maxWidth: 400,
    background: 'none',
    gridColumnStart: "1 / 3",
    boxShadow: '0 0 50px',
    backgroundColor: 'rgba(190, 190, 190, 0.849)',
    padding: '20px',
    
  },
  button: {
    width: '100%',
    marginTop: '10px'
  },
  title: {
    marginLeft: '100px'
  }
});
