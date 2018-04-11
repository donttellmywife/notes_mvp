import { combineReducers } from 'redux'

import { booksReducer as books } from 'pages/Notebook'
import { searchTerm } from 'pages/Search'

const rootReducer = combineReducers({
  searchTerm,
  books: books,
})
export default rootReducer
