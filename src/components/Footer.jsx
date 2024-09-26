import React from 'react'
import appstore from '../assets/images/appstore.png'
import googleplay from '../assets/images/googleplay.png'
import qrcode from '../assets/images/qrcode.png'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='flex flex-col bg-black px-[30px] lg:px-[135px] items-center whitespace-nowrap mt-4'>
    <div className='flex gap-[87px] text-white pt-[80px]'>
      <div className='flex flex-col '>
       <ul className='font-bold text-[25px] mb-[24px]'>Exclusive</ul>
       <ul className='mb-[16px]'>Subscribe</ul>
       <ul  className='mb-[16px]'>Get 10% off your first order</ul>
       <ul><input className='pl-[10px] py-[3px] border-2 border-white bg-black rounded-[4px] border-radius-[5px]' type="text" placeholder='Enter your email'/></ul>
      </div>
      <div>
        <ul className='text-[20px] mb-[24px]'>support</ul>
        <ul className='mb-[16px]'>111 xzy place
          <br />
          xyz city, xyz country.
        </ul>
        <ul className='mb-[16px]'>exculsive@gmail.com</ul>
        <ul>+94343434343434</ul>
      </div>
      <div>
        <ul className='text-[20px] mb-[24px]'>Account</ul>
        <ul className='mb-[16px]'>My account</ul>
        <ul className='mb-[16px]'>Login/Register</ul>
        <ul className='mb-[16px]'>Cart</ul>
        <ul className='mb-[16px]'>Wishlist</ul>
        <ul>Shop</ul>
      </div>
      <div>
        <ul className='text-[20px] mb-[24px]'>Quck Link</ul>
        <ul className='mb-[16px]'>Privcy policy</ul>
        <ul className='mb-[16px]'>Terms of use</ul>
        <ul className='mb-[16px]'>FAQ</ul>
        <ul>Contact</ul>
      </div>
      <div>
      <ul className='font-bold text-[20px] mb-[24px]'>Download App</ul>
      <ul className='text-[12px] text-[#FAFAFA] mb-[16px]' >Save $3 with app new user only</ul>
      <div className='flex'>
        <div><img src={qrcode} alt="" /></div>
        <div className='flex flex-col gap-[3px]'>
          <div><img src={googleplay} alt="" className='p-[3px]'/></div>
          <div><img src={appstore} alt="" className='p-[3px]'/></div>
        </div>
      </div>
      <div className='flex mt-[24px] gap-[30px]'>
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagram />
        <FaLinkedinIn />
        </div>
      </div>

    </div>

    <div className='h-[2px] bg-gray-400 mt-[60px] mb-[16px]'></div>
    <div className='text-center text-gray-400 mb-[24px]'>Copyright Rimel 2024. All right reserved</div>
    </div>
  )
}

export default Footer