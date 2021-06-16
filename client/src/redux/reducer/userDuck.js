import { loginWithGoogle, singOutGoogle} from '../../firebase'


//consts
const LOGIN = 'LOGIN'
const LOGIN_SUCESS = 'LOGIN_SUCESS'
const LOGIN_ERROR = ' LOGIN_ERROR'
const LOG_OUT = 'LOG_OUT'

//states
const initialState= {
    loggedIn: false,
    fetching: false
}

export default function reducer(state= initialState, action) {
  switch(action.type) {
      case LOGIN:
          return {
              ...state,
              fetching: true
          }
    case LOGIN_SUCESS: 
    return {
        ...state,
        fetching: false,
        ...action.payload,
        loggedIn: true
    }
    case LOGIN_ERROR:
        return {
            ...state,
            fetching: false,
            error : action.payload
        }
    case LOG_OUT: 
    return {
        ...initialState
    }
        default: 
        return state
  }
  
}

//actions


//googleLogin
export let doGoogleLoginAction =() =>(dispatch, getState) => {
    
    dispatch({
        type: LOGIN
    })
    return loginWithGoogle()
    .then(user => {
        dispatch({
            type: LOGIN_SUCESS,
            payload: {
                id: user.uid,
                fullName: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
        })
        saveStorage(getState())
    })
    .catch(e => {
    console.log(e)
    dispatch({
        type: LOGIN_ERROR,
        payload: e.message //en firebase el error viene en message 
    })
    })
}

//function axiliar que nos ayuda a guardar cosas en el localStorage
function saveStorage(storage) {
localStorage.storage = JSON.stringify(storage)
}

//action para recuperar la sesion iniciada 
export let restoreSessionAction = () => dispatch => {
    let storage = localStorage.getItem('storage')
    storage = JSON.parse(storage)
    if(storage && storage.user) {
        dispatch({
            type: LOGIN_SUCESS,
            payload: storage.user
        })
    }
}

//action para cerrar sesion (necesitamos sacar al usuario del state y mover el loggedIn a false)
// pero tambien necesitamos borrarlo del localStorage 

export let logOutAction = () => (dispatch, getState) => {
    singOutGoogle()
    dispatch({
        type: LOG_OUT
    })
    localStorage.removeItem('storage')
    }