import React, { Component } from 'react'

class Spinner extends Component {
  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <div className="spinner">'Loading...'</div>
    )
  }
}

export default Spinner
