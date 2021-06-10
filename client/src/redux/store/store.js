import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'



export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);



//npm install --save redux-thunk
//npm install redux react-redux
//npm install --save react-router-dom
//npm install --save redux-devtools-extension
//npm install redux-devtools

//ducks propone tener el reducer y las actions en un mismo archivo