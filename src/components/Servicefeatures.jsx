import React from "react";
import Wrapper from "./Wrapper";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiMoneyWavy } from "react-icons/pi";

const Servicefeatures = () => {
  return (
    <Wrapper>
      <div className="flex gap-[88px] pt-[140px] items-center justify-center mb-[140px] flex-wrap">
        <div className="flex items-center justify-between flex-col">
          <div className="h-[80px] w-[80px] bg-[#C1C0C1 ] rounded-[40px] flex justify-center items-center bg-[#c1c0c1]">
            <div className="h-[58px] w-[58px] bg-black flex items-center justify-center rounded-[30px]">
              <TbTruckDelivery className="text-white text-[35px]" />
            </div>
          </div>
          <p className="text-[20px] font-semibold">FREE AND FAST DELIVERY</p>
          <p className="text-[14px]">Free delivery for all order over $140</p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <div className="h-[80px] w-[80px] bg-[#C1C0C1 ] rounded-[40px] flex justify-center items-center bg-[#c1c0c1]">
            <div className="h-[58px] w-[58px] bg-black flex items-center justify-center rounded-[30px]">
              <RiCustomerService2Line className="text-white text-[35px]" />
            </div>
          </div>
          <p className="text-[20px] font-semibold">24/7 CUSTOMER SERVICE</p>
          <p className="text-[14px]">Friendly 24/7 customer support</p>
        </div>
        <div className="flex items-center justify-between flex-col">
          <div className="h-[80px] w-[80px] bg-[#C1C0C1 ] rounded-[40px] flex justify-center items-center bg-[#c1c0c1]">
            <div className="h-[58px] w-[58px] bg-black flex items-center justify-center rounded-[30px]">
              <PiMoneyWavy className="text-white text-[35px]" />
            </div>
          </div>
          <p className="text-[20px] font-semibold">MONEY BACK GUARANTEE</p>
          <p className="text-[14px]">We return money within 30 days</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Servicefeatures;
