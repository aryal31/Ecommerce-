import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Searchpopup = ({onClose}) => {
  return (
    
       <div className='fixed items-center justify-center flex bg-black opacity-50 inset-5 z-20'>
          <div className='bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg'>
          
          <div className='flex'>
          <input type="text" placeholder='what are you looking for?' className='bg-transparent' />
          <CiSearch className='text-[30px]'/>
          </div>
          </div>
          </div>
   
  )
}

export default Searchpopup