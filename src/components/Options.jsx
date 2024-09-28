import React from "react";
import optionsimg from "../assets/images/optionsimg.png";
import { SlArrowRight } from "react-icons/sl";
import Wrapper from "./Wrapper";


const Options = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center">
      <div className="flex items-center">
     
        <div className="flex flex-col space-y-[16px] mt-[45px]">
          <ul className="flex items-center space-x-3">
            <li>Woman's fashion</li>
            <li>
              <SlArrowRight />
            </li>
          </ul>
          <ul className="flex items-center space-x-10">
            <li>Men's fashion</li>{" "}
            <li>
              <SlArrowRight />
            </li>
          </ul>
          <ul>Electronics</ul>
          <ul>Home & lifestyle</ul>
          <ul>Medicine</ul>
          <ul>sports & outdoor</ul>
          <ul>Babys & toys</ul>
          <ul>groceries & pets</ul>
          <ul>Health & beauty</ul>
        </div>
        <div className="border-l-[1px] border-[#c9c9c9c9] self-stretch mx-8"></div>
        <div className="flex-1 ml-[40px] mt-[45px]">
          <img src={optionsimg} alt="" className="w-auto h-auto" />
        </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Options;
