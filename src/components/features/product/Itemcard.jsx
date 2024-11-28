import { controller } from "../../../assets/images";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Reviewstar from "./Reviewstar";

const Itemcard = () => {
  return (
    <div className="h-[350px] w-[270px] md:flex flex-col relative group">
      <div className=" bg-[#F5F5F5] h-[250px] ">
        <div>
          <div className="bg-[#db4444] rounded-[5px] w-[60px] h-[30px] text-[#f5f5f5f5] absolute mt-2 ml-3 items-center justify-center flex">
            -40%
          </div>
          <div className="absolute ml-[240px] mt-1 space-y-1">
            <div className="bg-white rounded-2xl h-[25px] w-[25px] flex items-center justify-center">
              <FaRegHeart />
            </div>
            <div className="bg-white rounded-2xl h-[25px] w-[25px] flex items-center justify-center">
              <IoEyeOutline />
            </div>
          </div>
        </div>
        <img src={controller} alt="" />
        <button className="bg-black text-white absolute bottom-[100px] left-0 h-12 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center">
          Add to cart
        </button>
      </div>
      <div className="16px">Dual sense</div>
      <div>
        <span className="text-[#db4444]">$120</span>
        <span className="line-through ml-4 text-[#808080]">$140</span>
      </div>
      <div className="flex items-center">
        {/* <img src={rating} alt="rating" className="w-[80px]" />{" "} */}
        <Reviewstar></Reviewstar>
        <span className="ml-1 text-[#808080]">(20)</span>{" "}
      </div>
    </div>
  );
};

export default Itemcard;
