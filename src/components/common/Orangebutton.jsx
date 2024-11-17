const Orangebutton = ({text,className}) => {
  return (
        //this button can be costomized as per the need( text property defines what text is to be written in the button. it can be passed as prop for some reason margin and padding does not change)
        <button className={`bg-[#db4444] text-white px-[17px] py-[6px] rounded-[4px] hover:bg-[#b93737] transition duration-300 ${className}`}>
          {text}
        </button>

  );
};


export default Orangebutton;
