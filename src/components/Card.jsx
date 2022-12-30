import React from 'react'

function Card({children}) {
  return (
    <div className='bg-white shadow-md rounded-md p-4 mb-5'>
        {children}
    </div>
  )
}

export default Card