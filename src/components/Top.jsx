import React, { useState, useRef, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

const Top = () => {
  const [isdropdownopen, setisdropdownopen] = useState(false);

  const toggledropdownopen = () => {
    setisdropdownopen(!isdropdownopen);
  };

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisdropdownopen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black h-8 text-white text-sm pt-1 flex items-center justify-end md:justify-center px-[30px] md:px[40px] lg:px-[135px]">
      <div className="text-center flex-1 hidden md:block">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a className="font-bold pl-[10px] underline ">shopNow</a>
      </div>
      <div className="flex items-center justify-end md:justify-center relative">
        <p>English</p>
      <SlArrowDown
        onClick={() => toggledropdownopen()}
        className="ml-[8px] text-[16px] cursor-pointer"
      />
 {isdropdownopen && (
        <div
          ref={dropdownRef}
          className=" absolute top-[30px] right-0 bg-black h-auto w-[95px] text-center pr-2 z-50"
        >
          <ul>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">
              English
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">
              Spanish
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">
              French
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">
              German
            </li>
            <li className="px-4 py-2 cursor-pointer hover:bg-gray-700">
              Chinese
            </li>
          </ul>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default Top;
