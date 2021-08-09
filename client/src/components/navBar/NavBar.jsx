import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logOutAction } from "../../redux/reducer/userDuck";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { auth } from "../../firebase";
import { useHistory } from "react-router";
import { searchGame } from "../../redux/reducer/gamesDuck";


import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {
  ListSubheader,
  FormControl,
  Select,
  InputLabel,
  Button,
} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { red } from "@material-ui/core/colors";
import { genres, filterByGenre } from "../../redux/reducer/gamesDuck";

import FavoriteIcon from "@material-ui/icons/Favorite";
import Cart from "../cart/Cart";

//expandir...

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#fafafa",
  },
  grow: {
    flexGrow: 1,
    background: "#141A32",
    gap : '1rem',
    gridAutoRows: '22rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  opt: {
    color: "#708090",
  },
  back: {
    background: "#080F28",
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const dispatch = useDispatch();
  const [videogame, setVideogame] = useState("");
  const [user, setUser] = useState(null);
  const generos = useSelector((store) => store.videogames.genres);
  const games = useSelector((store) => store.videogames.videogames);
  const history = useHistory();
  console.log(user)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function logOutWithGoogle() {
    dispatch(logOutAction());
    history.push('/')
    Swal.fire(
      {
        text:'Esperamos verte pronto',
        icon: 'success', 
        width:'20rem', 
        timer: '3000', 
        showConfirmButton: false 
      }
    ) 
  }

  function handleChange(e) {
    setVideogame(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchGame(videogame));
    setVideogame("");
  }
  useEffect(() => {
    dispatch(searchGame());
  }, []);
  const handleFilter = (e) => {
    dispatch(filterByGenre(e.target.value));
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, []);

  useEffect(() => {
    dispatch(genres());
  }, []);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <Link to="/signIn">
        {!user ? (
          <MenuItem onClick={handleMenuClose}>Iniciar sesion</MenuItem>
        ) : (
          <span></span>
        )}
      </Link>
      {user ? (
        <MenuItem onClick={logOutWithGoogle}>cerrar sesion</MenuItem>
      ) : (
        <span></span>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Badge color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar className={classes.grow} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            VIDEOJUEGOS
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Buscar..."
                type="text"
                value={videogame}
                onChange={(e) => handleChange(e)}
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </form>

          <Link to="/">
            <Button className={classes.text}>INICIO</Button>
          </Link>
          <IconButton aria-label="add to favorites">
            <Link to="/favorites">
              <Button className={classes.text}>favoritos</Button>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/destacados">
              <Button className={classes.text}>DESTACADOS</Button>
            </Link>
          </IconButton>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <FormControl className={classes.formControl}>
              <InputLabel
                className={classes.text}
                htmlFor="grouped-native-select"
              >
                Categorias
              </InputLabel>
              <Select
                className={classes.opt}
                onChange={(e) => {
                  handleFilter(e);
                }}
                native
                defaultValue=""
                id="grouped-native-select"
              >
                <option aria-label="None" color="primary" value="" />
                <optgroup label="Categorias">
                  {generos.map((e) => {
                    return <option value={e}>{e}</option>;
                  })}
                </optgroup>
              </Select>
            </FormControl>

            <IconButton color="inherit">
              <Badge color="secondary">
                <ShoppingCartIcon>
                  <Cart />
                </ShoppingCartIcon>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            > { user? <span><AccountCircle color='primary'/>{user.fullName}</span>  : <AccountCircle />}
              
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
