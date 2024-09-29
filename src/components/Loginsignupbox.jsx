import React from 'react'
import loginimg from '../assets/images/loginimg.png'

const Loginsignupbox = ({Logincomponent}) => {
  return (
    <div className='flex justify-between items-center w-[1200px] h-[781]'>
      <div className=''><img className='h-[805px] w-[781px]' src={loginimg} alt="" /></div>
      <Logincomponent/>
    </div>
  )
}

export default Loginsignupbox