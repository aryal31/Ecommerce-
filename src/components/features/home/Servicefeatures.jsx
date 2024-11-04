import React from "react";
import Wrapper from "../../common/Wrapper";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { PiMoneyWavy } from "react-icons/pi";

const serviceList = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all order over $140",
    icon: TbTruckDelivery,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: RiCustomerService2Line,
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: PiMoneyWavy,
  },
];
const Servicefeatures = () => {
  return (
    <Wrapper>
      <div className="flex gap-[88px] items-center justify-center flex-wrap">
        {serviceList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between flex-col"
            >
              <div className="h-[80px] w-[80px] bg-[#C1C0C1] rounded-[40px] flex justify-center items-center">
                <div className="h-[58px] w-[58px] bg-black flex items-center justify-center rounded-[30px]">
                  <item.icon className="text-white text-[35px]" />
                </div>
              </div>
              <p className="text-[20px] font-semibold">{item.title}</p>
              <p className="text-[14px]">{item.description}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Servicefeatures;
