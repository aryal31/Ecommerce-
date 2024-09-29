import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='flex justify-center items-center'>
    <div className=''>
      {children}
    </div>
    </div>
  )
}

export default Wrapper