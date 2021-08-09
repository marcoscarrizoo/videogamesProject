import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import styles from './favStyles'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'

const FavPage = () => {
const favorites = useSelector(store => store.videogames.favorites)
const classes = styles()
const history = useHistory()


    return (
        <div className={classes.container}>
            {favorites? Swal.fire({text:'no hay juegos en favoritos' , icon: 'warning', width:'20rem', timer: '3000', showConfirmButton: false }) + history.push('/')
       : <h2>LISTA DE FAVORITOS</h2> }
            

        </div>
    )
}

export default FavPage
