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
import Categoryitemsdesign from "./Categoryitemsdesign";

const Browsebycategory = () => {
  return (
    <>
      <Wrapper>
        <div className="flex justify-between">
          <Heading date="categories" title="Browse By Categories" />
          <Arrow />
        </div>
        <div className="flex justify-center items-center mt-[10px] space-x-[22px] flex-wrap">
          <Categoryitemsdesign device="phones" IconComponent={CiMobile3} />
          <Categoryitemsdesign
            device="laptops"
            IconComponent={HiOutlineComputerDesktop}
          />
          <Categoryitemsdesign
            device="smartwatches"
            IconComponent={BsSmartwatch}
          />
          <Categoryitemsdesign device="cameras" IconComponent={CiCamera} />
          <Categoryitemsdesign
            device="headphones"
            IconComponent={CiHeadphones}
          />
          <Categoryitemsdesign device="gaming" IconComponent={LuGamepad} />
        </div>
      </Wrapper>
    </>
  );
};

export default Browsebycategory;
