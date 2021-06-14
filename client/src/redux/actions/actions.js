export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL'
export const ADD_FAVORITES = 'ADD_FAVORITES'

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

export function addFavorites() {
    return {
        type: ADD_FAVORITES,
    }
}