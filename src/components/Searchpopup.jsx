import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Searchpopup = ({isOpen, onClose}) => {
  return (
    <div className=''>
       <div className={`${isOpen?'opacity-100 bg-[#e6e6e6]':'hidden'} h-[500px] w-[100vw] `}>
            <div className='bg-[#e6e6e6] flex w-[100vh] items-center justify-center'>
            <input
              type="text"
              placeholder="whare are you looking for?"
              className="bg-transparent outline-none"
            />
            <CiSearch className="text-gray-500 size-[30px]" />
            </div>
          </div>
    </div>
  )
}

export default Searchpopup