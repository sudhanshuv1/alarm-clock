import React from 'react'

const Time = ({text}) => {
  return (
    <>
      <p>{parseInt(text)<10? '0'+text.toString() : text}</p>
    </>
  )
}

export default Time