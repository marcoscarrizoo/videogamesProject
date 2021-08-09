
//consts
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL'
export const ADD_FAVORITES = 'ADD_FAVORITES'
export const GENRES= 'GENRES'
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE'
export const SEARCH_VIDEOGAME = 'SEARCH_VIDEOGAME'
//states
const initialState = {
    videogames: [],
    videogamedetail: [],
    genres: [],
    fetching: false, //maneja el estado loading(si cargan los videojuegos)
    favorites: [],
    
}

//reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FAVORITES: 
        return {
            ...state,
            favorites: action.payload
        }
        case SEARCH_VIDEOGAME: 
        return {
            ...state,
            videogames: action.payload
        }
        case FILTER_BY_GENRE: 
            return {
                ...state, 
                videogames: action.payload 

            }
        
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            }
        case GET_VIDEOGAME_DETAIL: 
        return {
            ...state,
            videogamedetail: action.payload
        }
        case GENRES: 
        return {
            ...state,
            genres: action.payload
        }
        
           default:
        return state; 
        }     
}

//actions

export function getVideogames() {
    return function(dispatch) {
        fetch('http://localhost:3001/videogames')
        .then(res => res.json())
        .then(data => {
            dispatch({type: GET_VIDEOGAMES, payload: data})
        })
    }
}

export function getGameDetail(id) {
    return function(dispatch) {
      fetch('http://localhost:3001/detail/' + id)
      .then(res => res.json())
      .then(detail => 
        dispatch({type: GET_VIDEOGAME_DETAIL, payload: detail}))
        
    }
}

export function searchGame(name) {
return function(dispatch) {
    fetch(`http://localhost:3001/search?name=${name}`)
    .then(res => res.json())
    .then(detail => dispatch({
        type: SEARCH_VIDEOGAME,
        payload: detail
    }))
}
}

export function empty() {
    return {
        type: GET_VIDEOGAME_DETAIL,
        payload: []
    }
}


export function genres() {
    return async function(dispatch) {
        const res = await fetch('http://localhost:3001/genres')
        const data = await res.json()
        dispatch({
            type: GENRES,
            payload: data
        })
    }
} 

export function filterByGenre(genre) {
return function(dispatch) {
    return fetch('http://localhost:3001/videogames')
    .then(res => res.json())
    .then(genres => {
        let newState = genres.filter(data=> data.genres.includes(genre))
        dispatch({
            type: FILTER_BY_GENRE,
            payload: newState
        })
    })
    
}
}

export function addFavorites(id) {
    let data = []
    return function(dispatch) {
        data = data.push(id)
     dispatch({
            type: ADD_FAVORITES,
            payload: data
        })
    }
}