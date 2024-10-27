import React, { useState } from "react";

import { PiGreaterThan } from "react-icons/pi";

const Quantitycounter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(prev=>prev+1);
  };

  const handleDecrement = ()=>{
    if(count >1){
      setCount(prev=>prev-1)
    }
  }
  return (
    <div>
      <div className="border-black border-[1px] h-[40px] w-[40px] md:h-[40px] md:w-[40px]bor rounded-lg relative flex items-center justify-center">
        <PiGreaterThan
          className="rotate-90 absolute right-0 bottom-0 cursor-pointer"
          onClick={() => handleDecrement()}
        />
        <PiGreaterThan
          className="-rotate-90 absolute top-0 right-0 cursor-pointer"
          onClick={() => handleIncrement()}
        />
        <p className="">{count}</p>
      </div>
    </div>
  );
};

export default Quantitycounter;
