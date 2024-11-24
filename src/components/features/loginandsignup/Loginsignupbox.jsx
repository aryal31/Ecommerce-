import { useState, useEffect } from 'react';
import { loginimg } from "../../../assets/images";

const Loginsignupbox = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle window resize and determine if the view is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount to set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex items-center w-auto h-auto gap-[30px] justify-center flex-wrap">
      {!isMobile && (
        <div className="md:flex hidden h-[800px] md:w-[800px]">
          <img className="h-auto w-auto object-cover" src={loginimg} alt="" />
        </div>
      )}
      <div className="flex"> {children}</div>
    </div>
  );
};

export default Loginsignupbox;
