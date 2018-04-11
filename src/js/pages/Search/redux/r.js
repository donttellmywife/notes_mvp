import SET from './at'

const searchTerm = (state = '', action) => {
  if (action.type === SET) return action.payload
  return state
}

export default searchTerm
