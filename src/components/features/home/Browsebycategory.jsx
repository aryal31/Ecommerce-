import Heading from "../../common/Heading";
import Arrow from "../../common/Arrow";
import Wrapper from "../../common/Wrapper";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera,CiMobile3,CiHeadphones} from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

const Browsebycategory = () => {
  const categoryItems = [
    {
      categoryName: "Phones",
      Icon: CiMobile3,
      path: "/",
    },
    {
      categoryName: "Laptops",
      Icon: HiOutlineComputerDesktop,
      path: "/",
    },
    {
      categoryName: "Smartwatches",
      Icon: BsSmartwatch,
      path: "/",
    },
    {
      categoryName: "Cameras",
      Icon: CiCamera,
      path: "/",
    },
    {
      categoryName: "Headphones",
      Icon: CiHeadphones,
      path: "/",
    },
    {
      categoryName: "Gaming",
      Icon: LuGamepad,
      path: "/",
    },
  ];

  return (
    <Wrapper>
      <div className="flex justify-between">
        <Heading date="categories" title="Browse By Categories" />
        <Arrow />
      </div>
      <div className="flex justify-center items-center space-x-[22px] flex-wrap ">
        {categoryItems.map((item, index) => {
          const IconComponent = item.Icon;
          return (
            <div
              className="flex justify-center items-center mt-[30px]"
              key={index}
            >
              <div className="border-[#b3b3b3b3] border h-[145px] w-[170px] justify-center items-center flex flex-col rounded-[4px] hover:text-white hover:bg-[#db4444] hover:rounded-[4px]">
                <IconComponent className="text-[50px]" />
                <p className="capitalize mt-2 text-[16px]">
                  {item.categoryName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Browsebycategory;
