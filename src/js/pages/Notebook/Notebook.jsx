import React from 'react'
import { string, func, bool, array, number } from 'prop-types'
import { connect } from 'react-redux'

import { Header, Spinner, Warning } from 'components'
import BookTab from './BookTab'

import { getBooks, bookSelected, addBook, deleteBook, updateBook } from './redux/ac'
import { getBooksState } from './redux/s'

import { active } from './styles/notebook.scss'


const makeBookTab = (book) => (<BookTab key={book.id} id={book.id} />)


class Notebook extends React.Component {
  componentDidMount() {
    this.props.loadBooks()
  }

  render() {
    const { title, books, hasErrored, isLoading, add } = this.props
    const tabs = books.map(makeBookTab)

    const addNew = (event) => {
      if (event.keyCode === 13) {
        add(event.target.value)
        event.target.value = ''
      }
    }

    return (<div>
      <Header />
      <div className={active}>{title}</div>
      <input placeholder="book name"
        onKeyDown={addNew}
        tabIndex="0"
      />
      <Warning warn={hasErrored} />
      <Spinner show={isLoading} />
      {tabs}
    </div>)
  }
}

Notebook.propTypes = {
  title: string,
  books: array,
  isLoading: bool,
  hasErrored: bool,
  loadBooks: func.isRequired,
}
Notebook.defaultProps = {
  title: 'NoteBooks',
  books: [],
  isLoading: true,
  hasErrored: false,
}

const mapStateToProps = (state) => ({
  books: getBooksState(state),
  isLoading: state.books.isLoading,
  hasErrored: state.books.hasErrored,
})
const mapDispatchToProps = (dispatch) => ({
  loadBooks: (url) => dispatch(getBooks(url)),
  add: (name) => dispatch(addBook(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notebook)
