import React from 'react'
import { useSelector } from 'react-redux'
import './favPage.css'


const FavPage = () => {
const favorites = useSelector(store => store.videogames.favorites)

    return (
        <div className='container'>
         {favorites.length?<h2>FAVORITOS</h2> : <h2>NO HAY FAVORITOS AGREGADOS</h2> }   
            

        </div>
    )
}

export default FavPage
