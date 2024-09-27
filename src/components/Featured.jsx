import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";

const Featured = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[140px] justify-between">
          <Heading date="Featured" title="New arrival" />
          <Arrow />
        </div>
        <div className="flex"> 

        </div>
      </Wrapper>
    </>
  );
};

export default Featured;
