import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";
import playstation from "../assets/images/playstation.png"
import speaker from "../assets/images/speaker.png"
import perfume from "../assets/images/perfume.png"
import women from "../assets/images/women.png"


const Featured = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[140px] justify-between">
          <Heading date="Featured" title="New arrival" />
          <Arrow />
        </div>
        <div className="flex gap-[30px] text-white"> 
        <div className="bg-black h-[600px] w-[570px] rounded-[4px]">
          <img src={playstation} alt="" />
          play station 5</div>
        <div className="flex flex-col gap-[30px]">
        <div className="h-[284px] w-[570px] rounded-[4px] bg-black">
          <img src={women} alt="" />women's collection</div>
        <div className="flex gap-[30px]">
          <div className="h-[284px] w-[270px] rounded-[4px] bg-black gap-5 ">
            <img src={speaker} alt="" />speakers</div>
          <div className="h-[284px] w-[270px] rounded-[4px] bg-black gap-5">
            <img src={perfume} alt="" />perfume</div>
        </div>
        </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Featured;
