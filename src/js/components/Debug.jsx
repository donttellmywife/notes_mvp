import React from 'react'

function Debug(props) {
  return (<pre><code>{JSON.stringify(props.data, null, 4)}</code></pre>)
}

export default Debug
