import React from "react";
import Wrapper from "./Wrapper";
import jbl from "../assets/images/jbl.png";

const Banner = () => {
  return (
    <Wrapper>
      {/* //this component is not yet fully dynamic.  */}
      <div className="bg-black w-[100vw] h-[500px] lg:w-[1120px] text-white md:flex mt-[40px] justify-center items-center hidden">
        <div className="flex flex-col ml-[60px]">
          <div className="text-[16px] text-[#00FF66]">Categories</div>
          <div className="h-[120px] w-[443px] text-[48px] font-semibold">
            Enhance Your Music Experience
          </div>
          <div>
            <div className="mt-[50px] flex h-[62px] w-[320px] gap-3">
              <div className="h-[62px] w-[62px] rounded-full bg-white text-[16px] text-black items-center justify-center flex flex-col">
                <div className="text-[16px] font-semibold">23</div>
                <div className="text-[11px]">Hours</div>
              </div>
              <div className="h-[62px] w-[62px] rounded-full bg-white text-[16px] text-black flex flex-col items-center justify-center">
                <div className="text-[16px] font-semibold">05</div>
                <div className="text-[11px]">Days</div>
              </div>
              <div className="h-[62px] w-[62px] rounded-full bg-white text-[16px] text-black flex flex-col items-center justify-center">
                <div className="text-[16px] font-semibold">59</div>
                <div className="text-[11px]">Minutes</div>
              </div>
              <div className="h-[62px] w-[62px] rounded-full bg-white text-[16px] text-black flex flex-col items-center justify-center">
                <div className="text-[16px] font-semibold">35</div>
                <div className="text-[11px]">Seconds </div>
              </div>
            </div>
          </div>
          <div>
            <button className="h-[56px] w-[171px] bg-[#00FF66] rounded-sm text-[16px] text-white mt-5 hover:bg-[#009933]">
              Buy Now!
            </button>
          </div>
        </div>
        <div className="hidden md:flex">
          <img src={jbl} alt="jbl logo"  />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
