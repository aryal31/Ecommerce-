import React from "react";
import Orangebutton from "../components/common/Orangebutton";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-[110px]">404 Not Found</div>
      <div className="text-[16px] mb-[40px]">
        Your visited page not found. You may go home page.
      </div>
      <Link to="/">
        <Orangebutton text={"Back to home page"} />
      </Link>
    </div>
  );
};

export default Errorpage;
