import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";
import Viewallbutton from "./Viewallbutton";
import Itemcard from "./Itemcard";

const Bestsellingproducts = () => {
  return (
    <>
      <Wrapper>
        <div>
          <div className="flex mt-[140px] justify-between">
            <Heading date="This month" title="best selling products" />
            <Viewallbutton/>
          </div>
        </div>
        <div className="flex gap-4">
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
