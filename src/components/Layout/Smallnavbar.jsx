import React, { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Usermenu from "../Usermenu";
import Searchpopup from "../Searchpopup";
import Sidebar from "../Layout/Sidebar";

const Smallnavbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [userclicked, setuserclicked] = useState(false);
  const dropdownRef = useRef(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSearchPopup = () => {
    setSearchOpen(!searchOpen);
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
    <div className="relative">
      <div className="flex items-center justify-between px-[30px] md:px-[50px] p-[30px] gap-[10px]">
        <div className="text-[20px] font-bold flex gap-4 items-center">
          <RxHamburgerMenu
            className="size-[30px]"
            onClick={toggleSidebarOpen}
          />
          <Link to="/">Exclusive</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <CiSearch className="size-[25px]" onClick={toggleSearchPopup} />
          </div>
          <Link to="wishlist">
            <CiHeart className="size-[25px]" />
          </Link>
          <Link to="cart">
            <CiShoppingCart className="size-[25px]" />
          </Link>
          <Usermenu></Usermenu>
        </div>
      </div>
      <div className="bg-[#B3B3B3B3] h-[1px]"></div>
      {sidebarOpen && (
        <Sidebar onClose={toggleSidebarOpen} isOpen={sidebarOpen} />
      )}
      {searchOpen && <Searchpopup onClose={() => setSearchOpen(!searchOpen)} />}
    </div>
  );
};

export default Smallnavbar;
