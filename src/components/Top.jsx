import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";


const Top = () => {
  const [isdropdownopen , setisdropdownopen] = useState(false);

  const toggledropdownopen=()=> {
    setisdropdownopen(!isdropdownopen);
  }
  
  return (
    <div className="bg-black h-8 text-white text-sm pt-1 flex items-center justify-between px-[30px] lg:px-[135px]">
      <div className="text-center flex-1">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <a className="font-bold pl-[10px] underline ">shopNow</a></div> <div>English </div> <SlArrowDown onClick={()=>toggledropdownopen()} className="ml-[8px] text-[16px] cursor-pointer"/>
        {
          isdropdownopen &&(
            <div className=" absolute top-[30px] right-[127px] bg-black h-auto w-[95px] text-center pr-2">
              <ul>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">English</li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">Spanish</li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">French</li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">German</li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">Chinese</li>
              </ul>
            </div>
          )
        }
    </div>
  );
};

export default Top;
