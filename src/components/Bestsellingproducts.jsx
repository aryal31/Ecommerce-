import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";
import Viewallbutton from "./Viewallbutton";
import Itemcard from "./Itemcard";

const Bestsellingproducts = () => {
  return (
    <>
      <>
        <div>
          <div className="flex justify-between px-[30px]">
            <Heading date="This month" title="best selling products" />
            <Viewallbutton/>
          </div>
        
        <div className="flex gap-4 justify-center align-center">
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
          <Itemcard></Itemcard>
        </div>
        </div>
      </>
    </>
  );
};

export default Bestsellingproducts;
