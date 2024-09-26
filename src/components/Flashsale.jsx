import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";

const Flashsale = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[140px] justify-between">
          <Heading date="Today's" title="flash sales" />
          <Arrow />
        </div>
      </Wrapper>
    </>
  );
};

export default Flashsale;
