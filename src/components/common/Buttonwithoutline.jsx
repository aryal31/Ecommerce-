import React from "react";

const Buttonwithoutline = ({text,className}) => {
  return (
    // text inside the button can be easily modified
    <div>
      <button className={`border-black border-[1px] md:w-[223px] md:h-[56px] rounded-[3px]  hover:bg-black hover:text-white transition-all duration-500 text-[15px] ${className}`}>
        {text}
      </button>
    </div>
  );
};

export default Buttonwithoutline;
