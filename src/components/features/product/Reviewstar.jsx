import React from "react";
import { FaStar } from "react-icons/fa6";

const Reviewstar = () => {
  const getRandomRating = () => {
    return Math.floor(Math.random() * 6);
  };

  const rating = getRandomRating();

  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <FaStar key={index} color={index < rating ? "gold" : "lightgray"} />
        );
      })}
    </>
  );
};

export default Reviewstar;
