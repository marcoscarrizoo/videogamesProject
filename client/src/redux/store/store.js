import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers
import gamesDuck from '../reducer/gamesDuck';
import userDuck,{restoreSessionAction} from '../reducer/userDuck'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let rootReducer = combineReducers({
videogames: gamesDuck,
user: userDuck
})



export const store = createStore(
  rootReducer,
 composeEnhancers(applyMiddleware(thunk))
);

export default function generatorStore() {   //--> crea el store y lo devuelve para poder utilizarlo
  let store = createStore(
      rootReducer,
     composeEnhancers(applyMiddleware(thunk))
  )
  
  restoreSessionAction()(store.dispatch)
  return store
}

//npm install --save redux-thunk
//npm install redux react-redux
//npm install --save react-router-dom
//npm install --save redux-devtools-extension
//npm install redux-devtools

//ducks propone tener el reducer y las actions en un mismo archivo