import React from 'react'
import optionsimg from '../assets/images/optionsimg.png'

const Options = () => {
  return (
    <>
    <div className='flex px-[30px] lg:px-[135px] border-r '>
      <div className='border-[#d9d9d9]'>
      <ul>Woman's fahion</ul>
      <ul>men's fashion</ul>
      <ul>Electronics</ul>
      <ul>Home and lifestyle</ul>
      <ul>Medicine</ul>
      <ul>sports & outdoor</ul>
      <ul>Babys & toys</ul>
      <ul>groceries & pets</ul>
      <ul>Health & beauty</ul></div>
      <div className='flex-1 px-40'>
        <img src={optionsimg} alt="" className='w-full h-full px-[40px] py-[45px]' />
      </div>
    </div>
    </>
  )
}

export default Options