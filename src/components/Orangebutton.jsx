import React from "react";

const Orangebutton = ({ text,paddingx='6', paddingy='2' }) => {
  return (
    
        <button className={`bg-[#db4444] text-white px-${paddingx} py-${paddingy} rounded-[4px] hover:bg-[#b93737] transition duration-300`}>
          {text}
        </button>

  );
};


export default Orangebutton;
