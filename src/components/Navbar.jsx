import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart,CiShoppingCart,CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

<CiSearch />;

const Navbar = ({ category, setcategory }) => {

  const [userclicked, setuserclicked] =useState(false);
   
  const handleuserclicked = ()=>{
    setuserclicked(!userclicked);
  }

  return (
    <div>
      <div className="flex items-center justify-between px-[30px] lg:px-[135px] p-[30px]">
        <div className="text-[24px] font-bold">Exclusive</div>
        <div className="flex space-x-6">
          <div
            onClick={() => setcategory("home")}
            className={`cursor-pointer ${
              category === "home" ? "underline font-bold" : ""
            }`}
          >
            Home
          </div>
          <div
            onClick={() => setcategory("contact")}
            className={category === "contact" ? "underline" : ""}
          >
            Contact
          </div>
          <div
            onClick={() => setcategory("about")}
            className={category === "about" ? "underline" : ""}
          >
            About
          </div>
          <div
            onClick={() => setcategory("signup")}
            className={category === "signup" ? "underline" : ""}
          >
            Sign up
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#e6e6e6] px-5 py-[7px] border border-black rounded-[4px] flex items-center">
            <input
              type="text"
              placeholder="whare are you looking for?"
              className="bg-transparent outline-none"
            />
            <CiSearch className="text-gray-500 size-[30px] " />
          </div>
          <CiHeart className="size-[40px]" />
          <CiShoppingCart className="size-[40px]" />
          <CiUser className="size-[40px] cursor-pointer" onClick={()=>handleuserclicked()}/>
            {
              userclicked &&(
                <div>
                  <ul>Manage My Account</ul>
                  <ul>My Order</ul>
                  <ul>My Cancellations</ul>
                  <ul>My reviews</ul>
                  <ul>Logout</ul>
                </div>
              )
            }
        </div>
      </div>
      <div className="bg-[#B3B3B3B3] h-[1px]"></div>
    </div>
  );
};

export default Navbar;
