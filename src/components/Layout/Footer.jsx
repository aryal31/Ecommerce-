import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import qrcode from "../../assets/images/qrcode.png";
import { FaFacebookF,FaXTwitter,FaInstagram, FaLinkedinIn,HiArrowRight } from "react-icons/fa";
import Imagebox from "../Imagebox";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* // foot is not yet dynamic. wokring on it */}
      <div className="flex flex-col bg-black  items-center whitespace-nowrap mt-4">
        <div className="flex flex-wrap justify-between px-5  lg:px-[100px] 2xl:px-[135px] text-white pt-[80px] gap-[20px]">
          <div className="flex flex-col ">
            <ul className="font-bold text-[25px] mb-[24px]">Exclusive</ul>
            <ul className="mb-[16px]">Subscribe</ul>
            <ul className="mb-[16px]">Get 10% off your first order</ul>
            <div className="flex items-center px-[15px] py-[4px] border-2 border-white bg-transparent rounded-[4px] border-radius-[5px]">
              <input
                className="bg-transparent focus:outline-none w-full"
                type="text"
                placeholder="Enter your email"
              />

              <HiArrowRight className="text-[30px] cursor-pointer" />
            </div>
          </div>
          <div>
            <ul className="text-[20px] mb-[24px]">support</ul>
            <ul className="mb-[16px]">
              111 abc place
              <br />
              xyz city, xyz country.
            </ul>
            <ul className="mb-[16px]">exculsive@gmail.com</ul>
            <ul>+94343434343434</ul>
          </div>
          <div>
            <ul className="text-[20px] mb-[24px]">Account</ul>
            <NavLink to="/account">
              <ul className="mb-[16px]">My account</ul>
            </NavLink>
            <NavLink to="/signup">
              <ul className="mb-[16px]">Login/Register</ul>
            </NavLink>
            <NavLink to="cart">
              <ul className="mb-[16px]">Cart</ul>
            </NavLink>
            <NavLink to='/wishlist'>
              <ul className="mb-[16px]">Wishlist</ul>
            </NavLink>
            <NavLink to='/' ><ul>Shop</ul></NavLink>
          </div>
          <div>
            <ul className="text-[20px] mb-[24px]">Quick Link</ul>
            <ul className="mb-[16px]">Privcy policy</ul>
            <ul className="mb-[16px]">Terms of use</ul>
            <ul className="mb-[16px]">FAQ</ul>
            <ul>Contact</ul>
          </div>
          <div>
            <ul className="font-bold text-[20px] mb-[24px]">Download App</ul>
            <ul className="text-[12px] text-[#FAFAFA] mb-[16px]">
              Save $3 with app new user only
            </ul>
            <Imagebox
              qrcode={qrcode}
              appstore={appstore}
              googleplay={googleplay}
            />
            <div className="flex mt-[24px] gap-[30px]">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-400 mt-[60px] mb-[16px]"></div>
        <div className="text-center text-gray-400 mb-[24px]">
          Designed and developed by Lunico Copyright 2024.
        </div>
      </div>
    </>
  );
};

export default Footer;
