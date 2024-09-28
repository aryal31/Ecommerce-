import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='flex justify-center items-center'>
    <div className='px-[30px] lg:px-[135px]'>
      {children}
    </div>
    </div>
  )
}

export default Wrapper