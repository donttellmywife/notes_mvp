import React from 'react'
import { connect } from 'react-redux'
import { string, array } from 'prop-types'

import NoteTab from '../Notebook/NoteTab'
import { Header } from '../../components'

const Search = ({ searchTerm, items }) => {
  const notes = items
    .filter((note) => `${note.name} ${note.text}`.toUpperCase()
      .indexOf(searchTerm.toUpperCase()) >= 0
    )
    .map((note) => <NoteTab key={note.id} {...note}/>)

  return (
    <div className="search">
      <Header showSearch />
      {notes}
    </div>
  )
}

Search.propTypes = {
  searchTerm: string,
  items: array,
}
Search.defaultProps = {
  searchTerm: '',
  items: [],
}

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
})

export const Unwrapped = Search
export default connect(mapStateToProps)(Search)
