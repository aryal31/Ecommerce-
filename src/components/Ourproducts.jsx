import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";
import Viewallproductsbutton from "./Viewallproductsbutton";

const Ourproducts = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[140px] justify-between">
          <Heading date="Our products" title="explore our products" />
          <Arrow />
        </div>
        <div className="flex"> 

        </div>
        <Viewallproductsbutton/>
      </Wrapper>
    </>
  );
};

export default Ourproducts;
