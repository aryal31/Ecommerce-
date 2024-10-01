import React from "react";

const Buttonwithoutline = ({text}) => {
  return (
    <div>
      <button className="border-black border-[1px] w-[223px] h-[56px] rounded-[3px]  hover:bg-black hover:text-white">
        {text}
      </button>
    </div>
  );
};

export default Buttonwithoutline;
