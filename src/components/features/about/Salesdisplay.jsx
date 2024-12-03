import { useState } from "react";
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
    <div className="p-4">
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {icondetails.map((item, index) => {
          const Icon = item.iname;
          return (
            <div
              className={`flex items-center justify-center align-center flex-col md:w-[270px] md:h-[230px] w-[150px] h-[180px] border-[#d9d9d9] rounded-md border-[1.5px] ${
                item.name === name
                  ? "border-none bg-[#db4444] text-white"
                  : ""
              } transition-all duration-300`}
              key={index}
              onMouseEnter={() => setName(item.name)}
              onMouseLeave={() => setName("")}
            >
              <div className="flex justify-center items-center mb-2">
                <div
                  className={`md:h-[58px] md:w-[58px] h-[40px] w-[40px] bg-black flex items-center justify-center rounded-full box-content border-[8px] border-opacity-30 ${
                    item.name === name ? "bg-white" : ""
                  }`}
                >
                  <Icon
                    className={`md:text-[35px] text-[24px] ${
                      item.name === name ? "text-black" : "text-white"
                    }`}
                  />
                </div>
              </div>
              <p className="text-[32px] font-bold">{item.quantity}</p>
              <p className="text-[16px] text-center">{item.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Salesdisplay;
