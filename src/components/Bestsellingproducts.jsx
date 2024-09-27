import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";

const Bestsellingproducts = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[140px] justify-between">
          <Heading date="This month" title="best selling products" />
          <Arrow />
        </div>
      </Wrapper>
    </>
  );
};

export default Bestsellingproducts;
