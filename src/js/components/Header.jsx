import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bool, string, func } from 'prop-types'

import { setSearchTerm } from 'pages/Search'

class Header extends Component {
  render() {
    const { handleSearch, searchTerm } = this.props
    const SearchInput = (
      <input type="text" placeholred="search"
        onChange={handleSearch}
        value={searchTerm}
      />
    )
    const SearchButton = <Link href="/search" to="/search">Search</Link>
    const Search = this.props.showSearch
      ? SearchInput
      : SearchButton

    return (
      <header>
        <h1>
          <Link href="/" to="/">Home</Link>
        </h1>
        {Search}
      </header>
    )
  }
}

Header.propTypes = {
  showSearch: bool,
  searchTerm: string.isRequired,
  handleSearch: func.isRequired
}
Header.defaultProps = {
  showSearch: false,
}

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm })
const mapDispatchToProps = (dispatch) => ({
  handleSearch(event) {
    dispatch(setSearchTerm(event.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
