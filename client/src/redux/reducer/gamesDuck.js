
//consts
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL'
export const ADD_FAVORITES = 'ADD_FAVORITES'

//states
const initialState = {
    videogames: [],
    videogamedetail: [],
    genres: [],
    fetching: false, //maneja el estado loading(si cargan los videojuegos)
    favorites: []
}

//reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
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

export function empty() {
    return {
        type: GET_VIDEOGAME_DETAIL,
        payload: []
    }
}

export function addFavorites(data) {
    return {
        type: ADD_FAVORITES,
        payload: data
    }
}
