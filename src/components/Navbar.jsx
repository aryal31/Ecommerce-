import React, { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

<CiSearch />;

const navLinks = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "contact",
    path: "/contact",
  },
  {
    text: "signup",
    path: "/signup",
  },
];

const Navbar = () => {
  
  const [category, setCategory] = useState("");
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
        <div className="text-[24px] font-bold"><Link to='/'>Exclusive</Link></div>
        <ul className="text-black flex gap-x-[30px]">
        {navLinks.map((item, index) => {
            return (
              <Link
                to={item.path}
                className={`capitalize cursor-pointer ${(category === item.text
                  ? "underline underline-offset-[6px]"
                  : "")}`}
                onClick={()=>{
                  setCategory(item.text)
                }}
                key={index}
              >
                {item.text}
              </Link>
            );
          })}
         
        </ul>
        <div className="flex items-center gap-4 relative">
          <div className="bg-[#e6e6e6] px-2 py-[3px] border border-black rounded-[4px] flex items-center">
            <input
              type="text"
              placeholder="whare are you looking for?"
              className="bg-transparent outline-none"
            />
            <CiSearch className="text-gray-500 size-[30px]" />
          </div>
          <Link to='wishlist'>
          <CiHeart className="size-[30px]" />
          </Link>
          <Link to='cart'>
          <CiShoppingCart className="size-[30px]" />
          </Link>
          <CiUser
            className={`size-[30px] cursor-pointer ${userclicked === true ? 'bg-[#db4444] rounded-full text-white':''}`}
            onClick={() => handleuserclicked()}
          />
          {userclicked && (
            <div
              ref={dropdownRef}
              className="absolute top-[100%] right-0 bg-[#7d7d7d] text-white bg-opacity-70 backdrop-blur-lg rounded-lg"
            >
              <ul className="flex flex-col">
                <Link to='account' className="cursor-pointer hover:bg-[#7d7d7d] p-2 rounded-t-lg flex justify-start items-center gap-x-3">
                  {" "}
                  <p className="text-[25px]">
                    <CiUser />
                  </p>
                
                  <p>Manage My Account</p>
               
                </Link>
                <li className="cursor-pointer hover:bg-[#7d7d7d] p-2 flex justify-start items-center gap-x-3">
                  <p className="text-[25px]">
                    <FiShoppingBag />
                  </p>
                  <p>My Order</p>
                </li>
                <li className="cursor-pointer hover:bg-[#7d7d7d] p-2 flex items-center gap-x-3">
                  <p className="text-[25px]">
                    <MdOutlineCancel />
                  </p>{" "}
                  My Cancellations
                </li>
                <li className="cursor-pointer hover:bg-[#7d7d7d] p-2 flex justify-start items-center gap-x-3">
                  <p className="text-[25px]">
                    <FaRegStar />{" "}
                  </p>{" "}
                  My reviews
                </li>
                <li className="cursor-pointer hover:bg-[#7d7d7d] p-2 rounded-b-lg flex justify-start items-center gap-x-3">
                  <p className="text-[25px]">
                    <CiLogout />{" "}
                  </p>
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#B3B3B3B3] h-[1px]"></div>
    </div>
  );
};

export default Navbar;
