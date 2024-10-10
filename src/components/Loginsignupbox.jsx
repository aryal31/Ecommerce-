import React from "react";
import loginimg from "../assets/images/loginimg.png";

const Loginsignupbox = ({ children }) => {
  return (
    <div className="flex items-center w-auto h-auto gap-[300px] justify-center flex-wrap">
      <div className="flex">
        <img
          className="h-[781px] w-[805px] object-cover"
          src={loginimg}
          alt=""
        />
      </div>
      <div className="flex"> {children}</div>
    </div>
  );
};

export default Loginsignupbox;
