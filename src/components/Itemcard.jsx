import React from 'react'
import Wrapper from './Wrapper'

const Itemcard = () => {
  return (
    <Wrapper>

    <div className='h-[350px] w-[270px] flex flex-col'>
    <div className=' bg-[#F5F5F5] h-[250px]'></div>
    <div className='16px'>XYZ controller</div>
    <div><span className='text-[#db4444]'>$120</span><span></span></div>
    <div>rating(123)</div>
    </div>
    </Wrapper>
  )
}

export default Itemcard