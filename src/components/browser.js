import React from 'react'

function Browser() {

  const width = window.innerWidth;

  return (
    <div>
      <p>Your screen width is {width}px wide</p>
    </div>
  )
}

export default Browser
