import { applyMiddleware, compose, createStore } from 'redux'
import Reducers from './reduces'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

let preloadedState = {}

const store = createStore(Reducers, preloadedState, compose(applyMiddleware(createLogger, thunk)))

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require('./reduces').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
