import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Arrow = () => {
  return (
    <div className="flex self-end">
      <div className="w-[46px] h-[46px] bg-[#E5E5E5] rounded-[30px] flex items-center justify-center">
        <FaArrowLeft />
      </div>
      <div className="w-[46px] h-[46px] bg-[#E5E5E5] rounded-[30px] flex items-center justify-center rotate-180 ml-2">
        <FaArrowLeft />
      </div>
    </div>
  );
};

export default Arrow;
