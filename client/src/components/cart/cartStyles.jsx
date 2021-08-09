import { makeStyles } from "@material-ui/core";

export default makeStyles({
    container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    backgroundPosition: "center",
   backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
    transition: "0.4s",
    },
    card1 : {
        background: 'none',
        color: 'white',
        boxShadow: '0 0 20px',
        height: '150px',
        padding: '10px',
        marginTop: '40px',
        marginLeft: '40px'
    },
    image: {
        width: '200px',
        height: '150px'
    }
})