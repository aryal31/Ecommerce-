import { controller } from "../../../assets/images";
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineShoppingCart } from "react-icons/md";


const ItemCardinWishlistSuggestion = () => {
  return (
    <div className="h-[350px] w-[270px] flex flex-col relative group">
      <div className=" bg-[#F5F5F5] h-[250px] ">
        <div>
          <div className="bg-[#db4444] rounded-[5px] w-[60px] h-[30px] text-[#f5f5f5f5] absolute mt-2 ml-3 items-center justify-center flex">
            -35%
          </div>
          <div className="absolute ml-[230px] mt-1">
            <div className="bg-white rounded-2xl h-[34px] w-[34px] flex items-center justify-center">
              <HiOutlineTrash />
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
    </div>
  )
}

export default ItemCardinWishlistSuggestion