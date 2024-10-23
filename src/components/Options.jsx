import React from "react";
import optionsimg from "../assets/images/optionsimg.png";
import { SlArrowRight } from "react-icons/sl";
import Wrapper from "./Wrapper";
import Carouselh from "./Carouselh";
import landscape from "../assets/images/landscape.jpg";
import lake from "../assets/images/lake.jpg";
import img2 from '../assets/images/img2.jpg'

const Options = () => {
  let slides = [
    landscape,
    lake,
    img2,
  ]
  return (
    <Wrapper>
    {/* This compnent is not yet completed */}
      
      <div>
      <div className="flex flex-col md:flex-row items-center md:justify-center ">
     
        <div className="md:flex flex-col space-y-[5px] mt-[45px] order-1 grid grid-cols-2 gap-[15px]">
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
        <div className="border-l-[1px] border-[#c9c9c9c9] self-stretch md:mx-8 order-1" ></div>
        <div className="flex md:ml-[40px] md:mt-[20px] mt-[10px] md:order-1 md:w-[60%] ">
          {/* <img src={optionsimg} alt="" className="w-auto h-full" /> */}
          <Carouselh slides={slides}></Carouselh>
        </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Options;
