import React from "react";
import Heading from "./Heading";
import Arrow from "./Arrow";
import Wrapper from "./Wrapper";

const Browsebycategory = () => {
  return (
    <>
      <Wrapper>
        <div className="flex mt-[140px] justify-between">
          <Heading date="categories" title="Browse By Categories" />
          <Arrow />
        </div>
        <div className="flex"> 

        </div>
      </Wrapper>
    </>
  );
};

export default Browsebycategory;
