import React, { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import Usermenu from "./Usermenu";


const Smallnavbar = () => {
  
  const [userclicked, setuserclicked] = useState(false);
  const dropdownRef = useRef(null);

  const handleuserclicked = () => {
    setuserclicked(!userclicked);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setuserclicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div>
      <div className="flex items-center justify-between px-[30px] md:px-[50px] p-[30px] gap-[10px]">
        <div className="text-[20px] font-bold"><Link to='/'>Exclusive</Link></div>
        <div className="flex items-center gap-4 relative">
          <Link to='cart'>
          <CiShoppingCart className="size-[30px]" />
          </Link>
          <Usermenu></Usermenu>
          <RxHamburgerMenu className="size-[30px]" />
        </div>
      </div>
      <div className="bg-[#B3B3B3B3] h-[1px]"></div>
    </div>
  );
};

export default Smallnavbar;
