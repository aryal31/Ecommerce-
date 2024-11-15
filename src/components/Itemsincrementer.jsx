import { useState } from "react";
const Itemsincrementer = () => {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="items-center justify-center flex h-[44px] w-[159px] border-[1px] border-[#808080] rounded-md">
      <div
        className="w-[40px] h-[44px] items-center justify-center text-[30px] flex cursor-pointer hover:bg-[#db4444] hover:border-none rounded-l-md hover:text-white"
        onClick={handleDecrement}
      >
        -
      </div>
      <div className=" flex items-center justify-center w-[80px] h-[44px] text-[20px] border-[#808080] border-[1px]">
        {count}
      </div>
      <div
        className="w-[40px] h-[44px] flex items-center justify-center text-[30px] cursor-pointer hover:bg-[#db4444] hover:border-none rounded-r-md hover:text-white"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </div>
    </div>
  );
};

export default Itemsincrementer;
