import React from 'react'
import controller from '../assets/images/controller.png'

const Cartitemcard = () => {
  return (
    <>
      <div className='flex justify-between items-center shadow  w-[1170px] h-[102px]'>
      <div className='flex items-center'> <img src={controller} className='h-[50px]' alt="" /> <p>Dual Sense</p></div>
      <p>$120</p>
      <div className='border-[#d9d9d9] border-[1.5px] rounded-sm bg-none'><input type="number" className='w-[72px] h-[44px] ' /></div>
      <p>$650</p>
      </div>
    </>
  )
}

export default Cartitemcard