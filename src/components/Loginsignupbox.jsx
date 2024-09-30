import React from 'react'
import loginimg from '../assets/images/loginimg.png'

const Loginsignupbox = ({children}) => {
  return (
    <div className='flex justify-center items-center w-[1200px] h-[781] gap-7'>
      <div className='flex'><img className='h-[500px] w-[500px] object-cover' src={loginimg} alt="" /></div>
    <div> {children}</div>
    </div>
  )
}

export default Loginsignupbox