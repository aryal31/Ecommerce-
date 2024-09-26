import React from 'react'
import optionsimg from '../assets/images/optionsimg.png'
import { SlArrowRight } from "react-icons/sl";

const Options = () => {
  return (
    <>
    <div className='flex px-[30px] lg:px-[135px] border-r '>
      <div className='border-[#d9d9d9] mt-[40px] flex flex-col gap-[16px]'>
      <ul className='flex items-center space-x-2'>
        <li>Woman's fahion</li> <li><SlArrowRight /></li></ul>
        <ul className='flex items-center space-x-7'>
        <li>Men's fashion</li> <li><SlArrowRight /></li></ul>
      <ul>Electronics</ul>
      <ul>Home and lifestyle</ul>
      <ul>Medicine</ul>
      <ul>sports & outdoor</ul>
      <ul>Babys & toys</ul>
      <ul>groceries & pets</ul>
      <ul>Health & beauty</ul></div>
      <div className='h-auto w-[1px] bg-slate-400 ml-[16px]'></div>
      <div className='flex-1 ml-[40px] mt-[45px]'>
        <img src={optionsimg} alt="" className='w-full h-full' />
      </div>
    </div>
    </>
  )
}

export default Options