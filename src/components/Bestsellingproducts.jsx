import React from "react";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import Viewallbutton from "./Viewallbutton";
import Itemcard from "./Itemcard";
import Orangebutton from "./Orangebutton";

const Bestsellingproducts = () => {
  return (
    <>
      <Wrapper>
        <div className="flex justify-between ">
          <Heading date="This Month" title="Best selling products" />
          <div className="self-end">
            <Orangebutton text='view all' />
          </div>
        </div>

        <div className="flex gap-4 justify-center align-center flex-wrap pt-5">
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
        </div>
      </Wrapper>
    </>
  );
};

export default Bestsellingproducts;
