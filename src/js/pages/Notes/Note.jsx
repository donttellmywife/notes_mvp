import React from 'react'

const Note = (props) => <h2>{props.match.params.id}</h2>
Note.defaultProps = {
  match: {
    params: {
      id: 1
    }
  }
}
Note.propTypes = {
  match: 'object'
}

export default Note
