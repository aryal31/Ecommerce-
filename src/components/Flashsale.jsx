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
      <div className="flex mt-[50px] justify-between">
          <Heading date="Today's" title="flash sales" />
          <Arrow />
        </div>
       <div className="flex flex-col justify-center items-center">
        <div className="mt-3 flex gap-4 flex-wrap items-center justify-center">
          <Itemcard />
          <Itemcard />
          <Itemcard />
          <Itemcard />
        </div>
        <div>
        <Orangebutton text="View all products" />
        </div>
       </div>
      </Wrapper>
    </>
  );
};

export default Flashsale;
