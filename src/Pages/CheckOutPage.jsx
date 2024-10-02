import React from "react";
import Orangebutton from "../components/Orangebutton";
import controller from '../assets/images/controller.png'

const CheckOutPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-[173px]">
        <div className="flex flex-col">
          <div className="mb-[48px] text-[36px]">Billing Detail</div>
          <label htmlFor="name" className="text-[black] opacity-40 text-[16px]">
            First Name<sup className="text-red-900">*</sup>{" "}
          </label>
          <input
            className="h-[50px] w-[470px] bg-[#F5F5F5] mt-[8px] mb-[32px]"
            type="text"
            id="name"
            required
          />

          <label
            htmlFor="companyname"
            className="text-[black] opacity-40 text-[16px]"
          >
            Company Name<sup className="text-red-900">*</sup>{" "}
          </label>
          <input
            className="h-[50px] w-[470px] bg-[#F5F5F5] mt-[8px] mb-[32px]"
            type="text"
            id="companyname"
            required
          />

          <label
            htmlFor="streetadd"
            className="text-[black] opacity-40 text-[16px]"
          >
            Street Address<sup className="text-red-900">*</sup>
          </label>
          <input
            className="h-[50px] w-[470px] bg-[#F5F5F5] mt-[8px] mb-[32px]"
            type="text"
            id="streetadd"
            required
          />

          <label
            htmlFor="apartment"
            className="text-[black] opacity-40 text-[16px]"
          >
            Apartment,floor,etc. (optional)
          </label>
          <input
            className="h-[50px] w-[470px] bg-[#F5F5F5] mt-[8px] mb-[32px]"
            type="text"
            id="apartment"
            required
          />

          <label
            htmlFor="phone"
            className="text-[black] opacity-40 text-[16px]"
          >
            Phone Number<sup className="text-red-900">*</sup>
          </label>
          <input
            className="h-[50px] w-[470px] bg-[#F5F5F5] mt-[8px] mb-[32px]"
            type="text"
            id="phone"
            required
          />

          <label
            htmlFor="email"
            className="text-[black] opacity-40 text-[16px]"
          >
            Email<sup className="text-red-900">*</sup>{" "}
          </label>
          <input
            className="h-[50px] w-[470px] bg-[#F5F5F5] mt-[8px] mb-[24px]"
            type="email"
            id="email"
            required
          />

          <div className="flex mt-3">
            {" "}
            <input type="checkbox" className="accent-[#DB4444]" id="check" />
            <p>Save this information for faster check-out next time</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
              {" "}
              <img src={controller} className="h-[40px] mr-3" alt="" />
              <p>LCD Monitor</p>
            </div>
            <div>$650</div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
            <img src={controller} className="h-[40px] mr-3" alt="" />
              <p>H1 Gamepad</p>
            </div>
            <div>$1100</div>
          </div>

          <div className="flex justify-between">
            <div>Subtotal:</div>
            <div>$1750</div>
          </div>
          <div className="h-[1px] bg-black opacity-40"></div>
          <div className="flex justify-between">
            <div>Shipping:</div>
            <div>Free</div>
          </div>
          <div className="h-[1px] bg-black opacity-40"></div>
          <div className="flex justify-between">
            <div>Total:</div>
            <div>$1750</div>
          </div>
          <div className="flex">
            <input type="radio" className="bank" />
            <label htmlFor="bank">bank</label>
          </div>
          <div>
            <input type="radio" className="deliveryoptions" />
            <label htmlFor="deliveryoptions">Cash on delivery</label>
          </div>
          <div className="flex">
        <input type="text" className="border-[1.5px] mr-[7px] pl-2" placeholder="Coupon code"/>
        <Orangebutton text='Apply coupon'/>
          </div>
        <div>
          <Orangebutton text='Place Order'/>
        </div>

          <div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
