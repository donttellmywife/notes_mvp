import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

const devTools =
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : (f) => f

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    devTools
    // applyMiddleware(logger)
  )
)

export default store
