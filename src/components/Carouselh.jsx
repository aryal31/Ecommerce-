import React, { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Carouselh = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const slideInterval = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [current]); // Depend on current to reset interval on manual change

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-400`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => {
          return <img src={s} alt="" />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between flex items-center text-white px-4 text-3xl">
        <button>
          <FaArrowCircleLeft onClick={previousSlide} />
        </button>
        <button>
          <FaArrowCircleRight onClick={nextSlide} />
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-4 w-full">
        {slides.map((s, i) => {
          return (
            <div
              key={"circle" + i}
              className={`rounded-full h-4 w-4 flex items-center justify-center ${
                i == current ? "bg-white" : "bg-gray-400"
              }`}
            >
              <div
                className={`h-3 w-3 rounded-full z-10 items-center flex justify-center ${
                  i == current ? "bg-[#db4444]" : ""
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carouselh;
