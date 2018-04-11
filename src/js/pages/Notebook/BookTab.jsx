import React from 'react'
import { string, func, bool, array, number } from 'prop-types'
import { connect } from 'react-redux'
import { propEq, find, compose } from 'ramda'

// action creators
import { bookSelected, deleteBook, updateBook } from './redux/ac'

// styles
import { active, bookTab } from './styles/tab.sass'


function BookTab(props) {
  const { name, select, remove, update, isSelected } = props
  const activeCls = isSelected ? active : ''

  return (<div
    onClick={select}
    className={`${bookTab} ${activeCls}`}>
      <h1>{name}</h1>
      <input defaultValue={name} />
      <button onClick={remove}>Delete</button> |
      <button onClick={update}> Edit</button>
  </div>)
}

BookTab.propTypes = {
  id: number,
  title: string,
  name: string,
  isSelected: bool
}
BookTab.defaultProps = {
  id: -1,
  title: 'Book',
  name: 'Some name',
  isSelected: false,
}

const mapStateToProps = (state, ownProps) => {
  const {items, selectedId} = state.books
  const {id, name} = find(propEq('id', ownProps.id), items)
  return {
    id,
    name,
    isSelected: id === selectedId,
  }
}
const mapDispatchToProps = (dispatch) => ({
  select: compose(dispatch, bookSelected),
  remove: compose(dispatch, deleteBook),
  update: compose(dispatch, updateBook),
})
const mergeProps = (stateProps, dispatchProps) => {
  const { id, name, isSelected } = stateProps
  const { select, remove, update } = dispatchProps
  return {
    name,
    isSelected,
    select: () => select(id),
    remove: () => remove(id),
    update: () => {
      const {name} = stateProps
      update({id, name})
    },
  }
}

export const Unwrapped = BookTab
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(BookTab)
