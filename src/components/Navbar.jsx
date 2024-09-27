import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

<CiSearch />;

const Navbar = ({ category, setcategory }) => {
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
          <FiShoppingCart className="size-[30px]" />
        </div>
      </div>
      <div className="bg-[#B3B3B3B3] h-[1px]"></div>
    </div>
  );
};

export default Navbar;
