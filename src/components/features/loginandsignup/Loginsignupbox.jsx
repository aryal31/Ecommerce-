import React from "react";
import { loginimg } from "../../../assets/images";

const Loginsignupbox = ({ children }) => {
  return (
    <div className="flex items-center w-auto h-auto gap-[30px] justify-center flex-wrap">
      <div className="md:flex hidden md:h-[450px] md:w-[500px]">
        <img
          className="h-auto w-auto object-cover"
          src={loginimg}
          alt=""
        />
      </div>
      <div className="flex"> {children}</div>
    </div>
  );
};

export default Loginsignupbox;
