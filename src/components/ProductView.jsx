import React from "react";
import controllerview1 from "../assets/images/controllerview1.png";
import controllerview2 from "../assets/images/controllerview2.png";
import controllerview3 from "../assets/images/controllerview3.png";
import controllerview4 from "../assets/images/controllerview4.png";

import controller from "../assets/images/controller.png";
import Orangebutton from "./Orangebutton";
import rating from "../assets/images/rating.png";
import { TbTruckDelivery } from "react-icons/tb";
import { MdLoop } from "react-icons/md";
import Size from "./Size";
import { CiHeart } from "react-icons/ci";
import Itemsincrementer from "./Itemsincrementer";

const ProductView = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex gap-[30px]">
        <div className="flex flex-col gap-4">
          <div className="w-[170px] h-[138px] bg-[#F5F5F5] items-center justify-center flex">
            <img src={controllerview1} alt="" />
          </div>
          <div className="w-[170px] h-[138px] bg-[#F5F5F5] items-center justify-center flex">
            <img src={controllerview2} alt="" />
          </div>
          <div className="w-[170px] h-[138px] bg-[#F5F5F5] items-center justify-center flex">
            <img src={controllerview3} alt="" />
          </div>
          <div className="w-[170px] h-[138px] bg-[#F5F5F5] items-center justify-center flex">
            <img src={controllerview4} alt="" />
          </div>
        </div>

        <div className="flex justify-center items-center h-[600px] w-[500px] bg-[#F5F5F5]">
          <img src={controller} alt="" />
        </div>

        <div className="flex flex-col w-[400px] h-[600px]">
          <div className="text-[24px] font-semibold">Dual Sense</div>
          <div className="flex items-center text-[14px] my-4">
            <img src={rating} className="h-[29px]" alt="" />
            <span className="text-black opacity-30">(150 Reviews) | </span>
            <span className="text-[#00FF66]">In Stock</span>{" "}
          </div>
          <div className="text-[24px] mb-6">$192.00</div>
          <div className="text-[14px]">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </div>
          <hr className="border- border-black border-opacity-40 my-6" />
          <div className="text-[20px] mb-6">Colors:</div>
          <div className="py-1 flex gap-1 items-center mb-6">
            <p>Size:</p> <Size />
          </div>
          <div className="flex gap-2 mb-10">
            <div className="">
       
          <Itemsincrementer/>


            </div>
            <Orangebutton text="Buy Now" />
            <div className="h-[40px] w-[40px] items-center justify-center flex text-[30px] border-[#808080] border-[1px] rounded-md">
              <CiHeart />
            </div>
          </div>
          <div className="flex flex-col rounded-md border-black border-[1px] mt-2">
            <div className="flex p-3">
              <div className="flex justify-center items-center text-[30px]">
                <TbTruckDelivery />
              </div>
              <div className="pl-4">
                <p className="text-[16px]">Free Delivery</p>
                <p className="text-[12px] underline underline-offset-2">
                  Enter your postal code for Delivery Availabiity
                </p>
              </div>
            </div>
            <div className="flex p-3 border-t-[1px] border-black">
              <div className="flex justify-center items-center text-[30px] border-black">
                <MdLoop />
              </div>
              <div className="pl-4">
                <p className="text-[16px]">Return Delivery</p>
                <p className="text-[12px]">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="underline underline-offset-1">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
