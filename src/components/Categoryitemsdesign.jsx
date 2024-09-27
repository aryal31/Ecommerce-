import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

const Categoryitemsdesign = ({device,IconComponent}) => {
  return (
    <>
        <div className="flex justify-center items-center mt-[60px]"> 
        <div className="border-[#b3b3b3b3] border h-[145px] w-[170px] justify-center items-center flex flex-col rounded-[4px] hover:text-white hover:bg-[#db4444] hover:rounded-[4px]"><IconComponent className="text-[50px]" /><p className="capitalize mt-2 text-[16px] ">{device}</p></div>
    </div>
    </>
  );
};

export default Categoryitemsdesign;
