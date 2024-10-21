import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";
import Orangebutton from "./Orangebutton";
import Itemcard from "./Itemcard";

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

        <div className="flex items-center justify-center pt-2"><Orangebutton text="View all products" /></div>
      </Wrapper>
    </>
  );
};

export default Ourproducts;
        