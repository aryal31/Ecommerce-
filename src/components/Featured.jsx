import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";
import playstation from "../assets/images/playstation.png";
import speaker from "../assets/images/speaker.png";
import perfume from "../assets/images/perfume.png";
import women from "../assets/images/women.png";

const Featured = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[140px] justify-between">
          <Heading date="Featured" title="New arrival" />
          <Arrow />
        </div>
        <div className="flex gap-[30px] text-white align-center justify-center mt-3 flex-wrap">
          <div className="bg-black h-[600px] w-[570px] rounded-[4px] relative ">
            <img
              src={playstation}
              alt="playstation"
              className="w-full h-full object-cover"
            />
            <div className="h-[122px] w-[242px] absolute bottom-[35px] left-[40px]">
              <p className="text-[24px] font-semibold"> play station 5 </p>
              <p className="text-[14px] mt-[16px] mb-[16px]">
                Black and white version of the ps5 coming outt on the sale
              </p>
              <p className="underline">Shop now</p>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] relative">
            <div className="h-[284px] w-[570px] rounded-[4px] bg-black relative">
              <img src={women} alt="" className="h-full w-full object-cover" />
              <div className="absolute h-[122px] w-[255px] bottom-[35px] left-[40px]">
                <p className="text-[24px] font-semibold"> Women's collection</p>
                <p className="text-[14px] mt-[16px] mb-[16px]">
                  Featured woman collections that give you another vibe
                </p>
                <p className="underline">Shop now</p>
              </div>
            </div>
            <div className="flex gap-[30px]">
              <div className="h-[284px] w-[270px] rounded-[4px] bg-black gap-5 relative">
                <img src={speaker} alt="" className="pl-[50px] pt-[40px]" />
                <div className="absolute h-[85px] w-[191px] bottom-[40px] left-[35px]">
                  <p className="text-[24px] font-semibold">
                    {" "}
                    Speakers
                  </p>
                  <p className="text-[14px] mt-[16px] mb-[16px]">
                    Amazon wireless speakers
                  </p>
                  <p className="underline">Shop now</p>
                </div>
              </div>
              <div className="h-[284px] w-[270px] rounded-[4px] bg-black gap-5 relative">
                <img src={perfume} alt="" className="pl-[50px] pt-[40px]" />
                <div className="absolute h-[85px] w-[191px] bottom-[40px] left-[35px]">
                  <p className="text-[24px] font-semibold">
                    {" "}
                    Perfume
                  </p>
                  <p className="text-[14px] mt-[16px] mb-[16px]">
                    GUCCI Intese oud edp
                  </p>
                  <p className="underline">Shop now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Featured;
