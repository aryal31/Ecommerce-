import React from "react";
import Orangebutton from "../components/Orangebutton";

const Myaccount = () => {
  return (
      <div className="flex items-center justify-center shadow-sm">
    <div className="items-center">
      <div className="text-[20px] text-[#DB4444] font-semibold">
        Edit your profile
      </div>
      <div className="flex gap-[40px] flex-wrap">
        <div className="flex flex-col">
          <label htmlFor="fname">First Name</label>
          <input
            className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] foucs:none pl-4 focus:outline-none"
            type="text"
            id="fname"
            placeholder="john"
            required
          />
        </div>
        <div>
          <div className="flex flex-col">
            <label htmlFor="fname">Last name</label>
            <input
              className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] pl-4 focus:outline-none"
              type="text"
              id="fname"
              placeholder="doe"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex gap-[40px] flex-wrap">
        <div className="flex flex-col">
          <label htmlFor="fname">Email</label>
          <input
            className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] pl-4 focus:outline-none"
            type="text"
            placeholder="example@gmail.com"
            id="fname"
            required
          />
        </div>
        <div>
          <div className="flex flex-col">
            <label htmlFor="address">Address</label>
            <input
              className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] pl-3 focus:outline-none"
              type="text"
              id="address"
              placeholder="123 street, 123"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] pl-4 focus:outline-none"
            type="text"
            id="password"
            placeholder="current password"
            required
          />
          <input
            className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] pl-4 focus:outline-none"
            type="text"
            placeholder="New Password"
            required

          />

<input
            className="h-[50px] w-[330px] bg-[#F5F5F5] mt-[8px] mb-[32px] pl-4 focus:outline-none"
            type="text"
            id="password"
            placeholder="Confirm new password"
            required
          />
        </div>
      </div>
      <div className="flex gap-3 items-center ">
        <p>cancel</p>
      <Orangebutton text='Save Changes'></Orangebutton>
      </div>
    </div>
    </div>
  );
};

export default Myaccount;
