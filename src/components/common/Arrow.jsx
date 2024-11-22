import { FaArrowLeft, FaArrowRight  } from "react-icons/fa6";

const Arrow = () => {
  return (
    <div className="flex self-end">
      <div className="h-[30px] w-[30px] md:w-[46px] md:h-[46px] bg-[#E5E5E5] rounded-[30px] flex items-center justify-center cursor-pointer">
        <FaArrowLeft />
      </div>
      <div className="h-[30px] w-[30px] md:w-[46px] md:h-[46px] bg-[#E5E5E5] rounded-[30px] flex items-center justify-center ml-2 cursor-pointer">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Arrow;
