import React from "react";
import Wrapper from "./Wrapper";

const Orangebutton = ({ text }) => {
  return (
    <Wrapper>
      <div className="flex justify-center">
        <button className="bg-[#db4444] text-white px-6 py-2 rounded-[4px] hover:bg-[#b93737] transitino duration-300">
          {text}
        </button>
      </div>
    </Wrapper>
  );
};
export default Orangebutton;
