import React from 'react'
import Loading from "../assets/loading.gif"

function Spinner() {
  return (
    <img className='w-28 mx-auto mt-20' src={Loading} alt="Loading.." />
  )
}

export default Spinner