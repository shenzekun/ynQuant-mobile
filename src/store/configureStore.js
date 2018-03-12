import {applyMiddleware, compose, createStore} from 'redux'
import Reducers from './reduces'
import createLogger from 'redux-logger'

let preloadedState = {}

export default createStore(Reducers, preloadedState, compose(
  applyMiddleware(createLogger)
))
