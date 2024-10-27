import React from "react";
import controller from "../assets/images/controller.png";
import Quantitycounter from "./Quantitycounter";

const Cartitemcard = () => {
  return (
    <>
      <div className="grid grid-cols-4 items-center h-[72px] text-[16px] shadow">
        <div className="flex items-center gap-1 md:gap-2 justify-center">
          <img src={controller} className="h-[30px] md:h-[50px] w-auto" alt="" /> <p className="text-center text-[12px] md:text-[16px]">Dual Sense</p>
        </div>
        <p className="text-center text-[12px] md:text-[16px]">$120</p>
        <div className="flex justify-center">
          <Quantitycounter></Quantitycounter>
          {/* <input type="number" className="border-[#d9d9d9] border-[1.5px] rounded-sm bg-none w-[72px] h-[44px] text-center" /> */}
        </div>
        <p className="text-center text-[12px] md:text-[16px]">$650</p>
      </div>
    </>
  );
};

export default Cartitemcard;
