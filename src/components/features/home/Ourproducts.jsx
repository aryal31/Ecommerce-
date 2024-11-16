import React from "react";
import Heading from "../../common/Heading";
import Arrow from "../../common/Arrow";
import Wrapper from "../../common/Wrapper";
import Orangebutton from "../../common/Orangebutton";
import Itemcard from "../product/Itemcard";

const Ourproducts = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[100px] justify-between">
          <Heading date="Our products" title="explore our products" />
          <Arrow />
        </div>
        <div className="flex gap-4 mt-3 flex-wrap">
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
        </div>

        <div className="flex items-center justify-center pt-2">
        <Orangebutton text="View all products" className='h-[50px] w-[200px]' />
        </div>
      </Wrapper>
    </>
  );
};

export default Ourproducts;
