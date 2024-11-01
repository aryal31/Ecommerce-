import React from "react";
import Wrapper from "./common/Wrapper";
import Carouselh from "./features/home/Carouselh";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";

// const Options = () => {
//   let slides = [
//     landscape,
//     lake,
//     img2,
//   ]

const Options = () => {
  let slides = [img2, img3, img4, img5];
  return (
    <Wrapper>
      {/* This compnent is not yet completed */}

      <div>
        <div className="flex flex-col xl:flex-row items-center">
          <div className="xl:flex flex-col space-y-[5px] mt-[45px] order-1 grid grid-cols-2 md:gap-x-[500px] gap-x-[90px] sm:gap-x-[200px] gap-y-[20px]">
            <ul className="flex items-center space-x-3">
              <li>Woman's fashion</li>
              {/* <li>
              <SlArrowRight />
            </li> */}
            </ul>
            <ul className="flex items-center space-x-10">
              <li>Men's fashion</li>
              {/* <li>
              <SlArrowRight />
            </li> */}
            </ul>
            <ul>Electronics</ul>
            <ul>Home & lifestyle</ul>
            <ul>Medicine</ul>
            <ul>sports & outdoor</ul>
            <ul>Babys & toys</ul>
            <ul>groceries & pets</ul>
            <ul>Health & beauty</ul>
            <ul>office & work</ul>
          </div>
          <div className="border-l-[1px] border-[#c9c9c9c9] self-stretch md:mx-8 order-1"></div>
          <div className="flex xl:ml-[40px] xl:order-1 xl:mt-[20px] mt-[10px] md:max-w-[1180px] xl:max-w-[870px]">
            {/* <img src={optionsimg} alt="" className="w-auto h-full" /> */}
            <Carouselh slides={slides}></Carouselh>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Options;
