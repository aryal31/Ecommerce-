import React, { useState } from "react";

const sizes = [
  {
    name: "XS",
  },
  {
    name: "s",
  },
  {
    name: "M",
  },
  {
    name: "L",
  },
  {
    name: "XL",
  },
];

const Size = () => {
  const [isSlected, setIsSeleceted] = useState("");
  return (
    <div className="flex gap-3">
      {sizes.map((item, index) => {
        return (
          <div
            key={index}
            className={`w-[32px] h-[32px] rounded-sm border-[#80808080] border-[1.5px] flex items-center justify-center cursor-pointer ${
              item.name === isSlected
                ? "bg-[#db4444] text-white border-none"
                : ""
            }`}
            onClick={() => {
              setIsSeleceted(item.name);
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Size;
