import { controller } from "../../../assets/images";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import Reviewstar from '../product/Reviewstar';

const Itemcardinwishlist = () => {
  return (
    <div className="h-[350px] w-[270px] flex flex-col relative">
      <div className=" bg-[#F5F5F5] h-[250px]">
        <div>
          <div className="bg-[#db4444] rounded-[5px] w-[60px] h-[30px] text-[#f5f5f5f5] absolute mt-2 ml-3 items-center justify-center flex">
            -35%
          </div>
          <div className="absolute ml-[230px] mt-1">
            <div className="bg-white rounded-2xl h-[34px] w-[34px] flex items-center justify-center cursor-pointer">
              <IoEyeOutline />
            </div>
          </div>
        </div>
        <img src={controller} alt="" />
        <button className="bg-black text-white absolute bottom-[100px] left-0 h-12 w-full flex items-center justify-center gap-2">
          <MdOutlineShoppingCart />
          Add To Cart
        </button>
      </div>
      <div className="16px">Dual sense</div>
      <div>
        <span className="text-[#db4444]">$120</span>
        <span className="line-through ml-4 text-[#808080]">$140</span>
      </div>
      <div className="flex items-center">
        <Reviewstar></Reviewstar>
        {/* <img src={rating} alt="rating" className="w-[80px]" /> */}
        <span className="ml-1 text-[#808080]">(10)</span>
      </div>
    </div>
  );
};

export default Itemcardinwishlist;
