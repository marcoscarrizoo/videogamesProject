import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
   const videogame = useSelector((store) => store.videogames.videogames)
   
   const [games, setGames] = useState(videogame.slice(0,100))
   const [pageNumber, setPageNumber] = useState(0)

   const gamesPerPage= 20
   const pagesVisited = pageNumber * gamesPerPage 

   const displayGames = games.slice(pagesVisited, pagesVisited + gamesPerPage)
   .map((user) => {
       return (
           <h3>{user.id}</h3>
       )
   })
    return (
        <div>holaaaaaaaa
            {displayGames}
        </div>
    )
}

export default Pagination
