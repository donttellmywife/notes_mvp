import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { string, func, object } from 'prop-types'

import { setSearchTerm } from './Search'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.goToSearch = this.goToSearch.bind(this)
  }

  goToSearch(event) {
    event.preventDefault();
    this.props.history.push('/search')
  }

  render() {
    const { searchTerm, handleSearch } = this.props
    return (<div className="landing">
      <h1>{searchTerm}</h1>
      <form onSubmit={this.goToSearch}>
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>
      <Link to="/search" href="/search">browse all </Link>
      <Link to="/books" href="/books">| books</Link>
    </div>)
  }
}

Landing.propTypes = {
  searchTerm: string,
  handleSearch: func,
  history: object.isRequired
}
Landing.defaultProps = {
  searchTerm: '',
  handleSearch: function noop() {}
}

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm })
const mapDispatchToProps = (dispatch) => ({
  handleSearch(event) {
    dispatch(setSearchTerm(event.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
