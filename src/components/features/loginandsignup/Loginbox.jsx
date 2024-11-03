import React from "react";
import { Link } from "react-router-dom";

const Loginbox = () => {
  return (
    <div className="flex flex-col">
      <p className="font-semibold text-[16px] lg:text-[20px] xl:text-[36px]">
        Log in to Executive
      </p>
      <label for="email" className="text-[16px]">
        Enter your details below
      </label>
      <input
        id="email"
        type="text"
        className="border-b-[1.5px] border-b-[#D9D9D9] focus:outline-none my-[40px]"
        placeholder="Email or Phone Number"
      />
      <input
        type="password"
        className="border-b-[1.5px] border-b-[#D9D9D9] focus:outline-none"
        placeholder="Password"
      />
      <div className="flex justify-between items-center mt-[40px]">
        <button className="bg-[#db4444] text-white rounded-sm h-[56px] w-[146px]">
          login
        </button>
        <span className="text-[#db4444]">forgot Password?</span>
      </div>
      <div className="gap-3 flex opacity-70 text-[16px] items-center justify-center">
        <span className="">Don't have an account?</span>
        <span className="font-semibold underline underline-offset-[6px]"><Link to='/signup'>Sign up</Link></span>
      </div>
    </div>
  );
};

export default Loginbox;
