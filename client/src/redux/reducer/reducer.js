import {GET_VIDEOGAMES, GET_VIDEOGAME_DETAIL, ADD_FAVORITES} from '../actions/actions'

const initialState = {
    videogames: [],
    videogamedetail: [],
    genres: [],
    status: false,
    favorites: []
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
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
        case ADD_FAVORITES: 
        return {
            ...state,
            favorites: action.payload
        }
           default:
        return state; 
        }     
}