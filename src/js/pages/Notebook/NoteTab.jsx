import React from 'react'
import { string, number, func } from 'prop-types'


function NoteTab({name, className, handleClick = noop}) {
  const cls = `tab ${className}`

  return (
    <div onClick={handleClick} className={cls}>
      <h1>{`${name}`}</h1>
    </div>
  )
}

NoteTab.defaultProps = {
  handleClick: noop
}
NoteTab.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  handleClick: func
}

function noop() {
  return undefined;
}

export default NoteTab
