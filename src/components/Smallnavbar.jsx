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
import Searchpopup from "./Searchpopup";


const Smallnavbar = () => {

  const [searchOpen, setSearchOpen] = useState(false);
  
  const [userclicked, setuserclicked] = useState(false);
  const dropdownRef = useRef(null);

  const handleuserclicked = () => {
    setuserclicked(!userclicked);
  };

  const toggleSearchPopup = ()=>{
    setSearchOpen(!searchOpen);
  }

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
    <div className="relative">
      <div className="flex items-center justify-between px-[30px] md:px-[50px] p-[30px] gap-[10px]">
        
        <div className="text-[20px] font-bold flex gap-4 items-center">
        <RxHamburgerMenu className="size-[40px]" />
          <Link to='/'>Exclusive</Link></div>
        <div className="flex items-center gap-4 relative">
          <CiSearch className="size-[30px]" onClick={toggleSearchPopup}/>
        <Link to='wishlist'>
          <CiHeart className="size-[30px]" />
          </Link>
          <Link to='cart'>
          <CiShoppingCart className="size-[30px]" />
          </Link>
          <Usermenu></Usermenu>
          
        </div>
      </div>
      <div className="bg-[#B3B3B3B3] h-[1px]"></div>
      <div className="absolute"><Searchpopup isOpen={searchOpen} onClose={toggleSearchPopup} /></div>
    </div>
  );
};

export default Smallnavbar;
