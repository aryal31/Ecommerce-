import React from "react";
import Wrapper from "./Wrapper";

const Orangebutton = ({ text }) => {
  return (
    
        <button className="bg-[#db4444] text-white px-6 py-2 rounded-[4px] hover:bg-[#b93737] transition duration-300">
          {text}
        </button>

  );
};
export default Orangebutton;
