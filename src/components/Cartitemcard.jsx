import React from "react";
import controller from "../assets/images/controller.png";

const Cartitemcard = () => {
  return (
    <>
      <div className="grid grid-cols-4 items-center h-[72px] text-[16px] shadow">
        <div className="flex items-center gap-2 ">
          {" "}
          <img src={controller} className="h-[50px]" alt="" /> <p>Dual Sense</p>
        </div>
        <p className="">$120</p>
        <div className="flex">
          <input type="number" className="border-[#d9d9d9] border-[1.5px] rounded-sm bg-none w-[72px] h-[44px] text-center" />
        </div>
        <p>$650</p>
      </div>
    </>
  );
};

export default Cartitemcard;
