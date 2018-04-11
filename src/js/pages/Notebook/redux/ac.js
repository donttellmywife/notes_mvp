import { merge } from 'ramda'

import API from '_modules'

import { ADD, UPDATE, DELETE, LOADING, FAIL, SELECT, LOAD } from './at'

const set = (books) => ({ type: LOAD, payload: books })
const error = (bool) => ({ type: FAIL, hasErrored: bool })
const loading = (bool) => ({ type: LOADING, isLoading: bool })

const bookSelected = (id) => ({ type: SELECT, id })

const add = (book) => ({ type: ADD, payload: book })
const remove = (id) => ({ type: DELETE, id })
const update = (book) => ({ type: UPDATE, id: book.id, payload: book })

function getBooks() {
  return (dispatch) => {
    dispatch(loading(true))

    API.GET('books')
      .then((response) => dispatch(set(response)))
      .catch(() => dispatch(error(true)))
      .then(() => dispatch(loading(false)))
  }
}

function addBook(name) {
  const book = {
    userId: 1,
    public: true,
    name: name,
  }

  return (dispatch) => {
    API.POST('books', book)
      .then((res) => dispatch(add(merge(book, res))))
      .catch(console.error)
  }
}

function deleteBook(id) {
  return (dispatch) => {
    API.DELETE(`books/${id}`)
      .then(() => dispatch(remove(id)))
      .catch(console.error)
  }
}

function updateBook(book) {
  return (dispatch) => {
    API.UPDATE(`books/${book.id}`, book)
      .then(() => dispatch(update(book)))
      .catch(console.error)
  }
}

export { getBooks, bookSelected, addBook, deleteBook, updateBook }
