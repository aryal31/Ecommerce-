import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ onClose, isOpen }) => {
  //You can add other new elements in sidebar easily
  const navLinks = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Contact",
      path: "/contact",
    },
    {
      text: "Signup",
      path: "/signup",
    },
  ];

  return (
    <div
      className={`h-[100vh] w-[100vw] bg-[#d9d9d9] fixed top-0 left-0 z-50 p-4 justify-center flex transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <IoClose
        className="absolute right-4 top-4 text-2xl cursor-pointer"
        aria-label="Close Sidebar"
        onClick={onClose}
      />
      <ul className="mt-12 space-y-4">
        {navLinks.map((item, index) => {
          return (
            <li
              className="hover:bg-white capitalize w-[100vw] text-center"
              key={index}
            >
              <Link
                key={index}
                to={item.path}
                onClick={onClose}
                className="block py-2 px-4 text-lg capitalize"
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
