import React from "react";

const Categoryitemsdesign = ({ device, IconComponent }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-[60px]">
        <div className="border-[#b3b3b3b3] border h-[145px] w-[170px] justify-center items-center flex flex-col rounded-[4px] hover:text-white hover:bg-[#db4444] hover:rounded-[4px]">
          <IconComponent className="text-[50px]" />
          <p className="capitalize mt-2 text-[16px] ">{device}</p>
        </div>
      </div>
    </>
  );
};

export default Categoryitemsdesign;
