export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'

export function getVideogames() {
    return function(dispatch) {
        fetch('http://localhost:3001/videogames')
        .then(res => res.json())
        .then(data => {
            dispatch({type: GET_VIDEOGAMES, payload: data})
        })
    }
}