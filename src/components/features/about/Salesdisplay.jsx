import  { useState } from "react";
import { CiShop, CiDollar } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { FaSackDollar } from "react-icons/fa6";

const icondetails = [
  {
    name: "shop",
    iname: CiShop,
    quantity: "10.5k",
    message: "Sellers active",
  },
  {
    name: "money",
    iname: CiDollar,
    quantity: "33k",
    message: "Monthly Product Sale",
  },
  {
    name: "bag",
    iname: FiShoppingBag,
    quantity: "45.5k",
    message: "Customers active in our site",
  },
  {
    name: "sack",
    iname: FaSackDollar,
    quantity: "25k",
    message: "Actual gross sale in our site",
  },
];

const Salesdisplay = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <div className="flex items-center justify-center gap-[30px] flex-wrap">
        {icondetails.map((item, index) => {
          const Icon = item.iname;
          return (
            <div
              className={`flex items-center justify-center align-center flex-col w-[270px] h-[230px] border-[#d9d9d9] rounded-md border-[1.5px] ${
                item.name === name
                  ? "border-none bg-[#db4444] text-[white]"
                  : ""
              }`}
              key={index}
              onMouseEnter={() => {
                setName(item.name);
              }}
              onMouseLeave={() => {
                setName("");
              }}
            >
              <div className="flex justify-center items-center">
                <div
                  className={`h-[58px] w-[58px] bg-black flex items-center justify-center rounded-full box-content border-[13px] border-opacity-30 ${
                    item.name === name && "bg-white"
                  }`}
                >
                  <Icon
                    className={` text-[35px] ${
                      item.name === name ? "text-black" : "text-white"
                    }`}
                  />
                </div>
              </div>
              <p className="text-[32px] font-bold">{item.quantity}</p>
              <p className="text-[16px]">{item.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Salesdisplay;
