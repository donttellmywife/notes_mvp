import { combineReducers } from 'redux'
import { findIndex, propEq } from 'ramda'

import { FAIL, LOADING, SELECT, LOAD, ADD, UPDATE, DELETE } from './at'


const set = (state = [], action) => {
  if (action.type === LOAD) return action.payload

  if (action.type === ADD) return state.concat(action.payload)

  if (action.type === UPDATE) {
    const index = findIndex(propEq('id', action.id))(state)
    const before = state.slice(0, index)
    const after = state.slice(index + 1)
    return [...before, action.payload, ...after]
  }

  if (action.type === DELETE) return state.filter((book) => action.id !== book.id)

  return state
}

const error = (state = false, action) => {
  if (action.type === FAIL) return action.hasErrored
  return state
}

const loading = (state = false, action) => {
  if (action.type === LOADING) return action.isLoading
  return state
}

const select = (state = -1, action) => {
  if (action.type === SELECT) return action.id
  return state
}


export { set, select, error, loading }
export default combineReducers({
  items: set,
  selectedId: select,
  hasErrored: error,
  isLoading: loading,
})
