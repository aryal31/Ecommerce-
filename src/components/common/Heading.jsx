
// you can cange the elements in header as much as you want ( you can change the date and title and the color of the text as well.)
const Heading = ({ date = "", title = "", textClr = "text-[#DB4444]" }) => {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="h-[30px] w-[15px] md:h-[40px] md:w-[20px] aspect-[1/2] bg-[#DB4444] rounded-[4px]"></div>
        <div
          className={` ${textClr} font-bold md:text-[16px] text-[14px]  pl-[16px] capitalize`}
        >
          {date}
        </div>
      </div>
      <div className="mt-[24px] flex justify-between">
        <div className=" md:text-[36px] text-[20px] font-semibold capitalize">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Heading;
