import React, { useState } from "react";
import { ChevronUp, ChevronDown } from 'lucide-react';

const Quantitycounter = () => {
  // Use string state instead of number
  const [count, setCount] = useState('1');

  const handleIncrement = () => {
    setCount(String(parseInt(count) + 1));
  };

  const handleDecrement = () => {
    if (parseInt(count) > 1) {
      setCount(String(parseInt(count) - 1));
    }
  };

  const handleInputChange = (e) => {
    // Update with raw input value
    setCount(e.target.value);
  };

  return (
    <div>
      <div className="border-black border-opacity-40 border-[2px] h-[30px] w-[40px] md:h-[40px] md:w-[60px] rounded-lg relative flex items-center justify-center">
        <ChevronDown
          className="absolute right-0 bottom-0 cursor-pointer h-4 w-4 md:w-4 md:h-4 md:mr- md:mb-"
          onClick={handleDecrement}
        />
        <ChevronUp
          className="absolute top-0 right-0 cursor-pointer h-3 w-3 md:w-4 md:h-4 md:mr- md:mt-"
          onClick={handleIncrement}
        />
        <div className="text-[10px] md:text-[16px] flex justify-center">
          <input 
            type="number" 
            value={count}
            onChange={handleInputChange}
            className="w-[50px] h-8 outline-none text-center"
            min="0"
            style={{ 
              MozAppearance: 'textfield',
              WebkitAppearance: 'textfield',
              appearance: 'textfield'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Quantitycounter;