import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import history from './history'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const preloadedState = undefined
const store = createStore(
  rootReducer(history),
  preloadedState,
  applyMiddleware(thunkMiddleware, routerMiddleware(history))
)

export default store
