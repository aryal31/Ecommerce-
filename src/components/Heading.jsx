import React from "react";
import Wrapper from "./Wrapper";

const Heading = ({ date, title }) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="h-[40px] w-[20px] aspect-[1/2] bg-[#DB4444] rounded-[4px]"></div>
        <div className="text-[#DB4444] font-bold text-[16px]  pl-[16px] capitalize">
          {date}
        </div>
      </div>
      <div className="mt-[24px] flex justify-between">
        <div className=" text-[36px] font-semibold capitalize">{title} </div>
      </div>
    </div>
  );
};

export default Heading;
