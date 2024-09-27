import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";


const Top = () => {
  const [isdropdownopen , setisdropdownopen] = useState('');

  const toggledropdownopen=()=> {
    return
  }
  
  return (
    <div className="bg-black h-8 text-white text-sm pt-1 flex items-center justify-between px-[30px] lg:px-[135px]">
      <div className="text-center flex-1">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <a className="font-bold pl-[10px] underline ">shopNow</a></div> <div>English </div> <SlArrowDown onClick={()=>toggledropdownopen()} className="ml-[8px] text-[16px]"/>
    </div>
  );
};

export default Top;
