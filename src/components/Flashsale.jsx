import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";
import Itemcard from "./Itemcard";
import Orangebutton from "./Orangebutton";

const Flashsale = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[140px] justify-between ">
          <Heading date="Today's" title="flash sales" />
          <Arrow />
        </div>
        <div className="mt-3 flex gap-4">
          <Itemcard />
          <Itemcard />
          <Itemcard />
          <Itemcard />
        </div>
        <Orangebutton text="View all products" />
      </Wrapper>
    </>
  );
};

export default Flashsale;
