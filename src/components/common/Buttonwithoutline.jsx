const Buttonwithoutline = ({text,className}) => {
  return (
    <div>
      <button className={`border-black border-[1px] md:w-[223px] md:h-[56px] rounded-[3px]  hover:bg-black hover:text-white transition-all duration-500 text-[15px] ${className}`}>
        {text}
      </button>
    </div>
  );
};

export default Buttonwithoutline;
