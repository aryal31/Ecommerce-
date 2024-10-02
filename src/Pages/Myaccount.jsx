import React from 'react'

const Myaccount = () => {
  return (
    <div>
      <div className='text-[20px] text-[#DB4444] font-semibold'>Edit your profile</div>
      <div className='flex'>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" id='fname' />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Myaccount