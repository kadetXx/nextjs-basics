import React from 'react'

function Browser() {

  const width = window.innerWidth;

  return (
    <div>
      <p>Your screen size is {width}px wide</p>
    </div>
  )
}

export default Browser
