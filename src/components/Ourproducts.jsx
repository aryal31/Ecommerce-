import React from "react";
import Heading from "./common/Heading";
import Arrow from "./common/Arrow";
import Wrapper from "./common/Wrapper";
import Orangebutton from "./common/Orangebutton";
import Itemcard from "./features/product/Itemcard";

const Ourproducts = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[100px] justify-between">
          <Heading date="Our products" title="explore our products" />
          <Arrow />
        </div>
        <div className="flex gap-4 mt-3 flex-wrap items-center justify-center">
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
        </div>

        <div className="flex items-center justify-center pt-2">
          <Orangebutton text="View all products" />
        </div>
      </Wrapper>
    </>
  );
};

export default Ourproducts;
