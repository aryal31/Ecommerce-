import React from 'react'

const Myaccount = () => {
  return (
    <div>
      <div className='text-[20px] text-[#DB4444] font-semibold'>Edit your profile</div>
      <div className='flex gap-[40px]'>
        <div className='flex flex-col'>
          <label htmlFor="fname">First Name</label>
          <input
            className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] foucs:none"
            type="text"
            id="fname"
            required
          />
        </div>
        <div>
        <div className='flex flex-col'>
          <label htmlFor="fname">First Name</label>
          <input
            className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] foucs:none"
            type="text"
            id="fname"
            required
          />
        </div>
        </div>
        </div>
        <div className='flex gap-[40px]'>
        <div className='flex flex-col'>
          <label htmlFor="fname">Email</label>
          <input
            className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] foucs:none"
            type="text"
            id="fname"
            required
          />
        </div>
        <div>
        <div className='flex flex-col'>
          <label htmlFor="fname">Address</label>
          <input
            className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] foucs:none"
            type="text"
            id="fname"
            required
          />
        </div>
        </div>
        </div>
      
      
    </div>
  )
}

export default Myaccount