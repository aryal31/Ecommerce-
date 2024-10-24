import React, { useEffect, useState, useRef } from "react";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";


const Usermenu = () => {
 
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
    <div className='relative z-50'>
       <CiUser
            className={`size-[32px] cursor-pointer ${userclicked === true ? 'bg-[#db4444] rounded-full text-white':''}`}
            onClick={() => handleuserclicked()}
          />
          {userclicked && (
            <div
              ref={dropdownRef}
              className="absolute top-[100%] right-0 bg-[#7d7d7d] text-white bg-opacity-70 backdrop-blur-lg rounded-lg mt-2"
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
  )
}

export default Usermenu