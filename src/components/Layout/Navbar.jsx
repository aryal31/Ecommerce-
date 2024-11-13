import { CiHeart, CiShoppingCart, CiSearch } from "react-icons/ci";
import Usermenu from "../Usermenu";
import { NavLink } from "react-router-dom";

<CiSearch />;

const navLinks = [
  // you can add other pages in navbar by just simplying adding the page you want in the array and giving the path to it
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
  return (
    <div>
      <div className="flex items-center justify-between px-[30px] md:px-[50px] p-[30px] gap-[10px]">
        <div className="text-[24px] font-bold">
          <NavLink to="/" end>
            Exclusive
          </NavLink>
        </div>
        <ul className="text-black flex gap-x-[30px]">
          {navLinks.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `capitalize cursor-pointer ${
                    isActive ? "underline underline-offset-[6px]" : ""
                  }`
                }
                end={item.path === "/"}
                key={index}
              >
                {item.text}
              </NavLink>
            );
          })}
        </ul>
        <div className="flex items-center gap-4 relative">
          <div className="bg-[#e6e6e6] px-2 py-[3px] border border-black rounded-[4px] flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none"
            />
            <CiSearch className="text-gray-500 size-[30px] cursor-pointer" />
          </div>
          <NavLink to="wishlist">
            <CiHeart className="size-[30px]" />
          </NavLink>
          <NavLink to="cart">
            <CiShoppingCart className="size-[30px]" />
          </NavLink>
          <Usermenu />
        </div>
      </div>
      <div className="bg-[#B3B3B3B3] h-[1px]"></div>
    </div>
  );
};

export default Navbar;
