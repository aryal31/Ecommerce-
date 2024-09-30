import React from 'react'
import loginimg from '../assets/images/loginimg.png'

const Loginsignupbox = ({children}) => {
  return (
<div className='flex justify-center items-center w-auto h-auto gap-[40px]'>
      <div className='flex'><img className='h-[500px] w-[500px] object-cover' src={loginimg} alt="" /></div>
    <div className='flex'> {children}</div>
    </div>
  )
}

export default Loginsignupbox