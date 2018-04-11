import { createSelector } from 'reselect'

const getBooks = (state) => state.books.items

export const getBooksState = createSelector([getBooks], (books) => books)
