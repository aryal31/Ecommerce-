import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='px-[30px] lg:px-[135px] align-center justify-center'>
      {children}
    </div>
  )
}

export default Wrapper