import React from "react";
import Viewallbutton from "../components/Viewallbutton";
import Orangebutton from "../components/Orangebutton";

const Errorpage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-[110px]">404 Not Found</div>
      <div className="text-[16px] mb-[30px]">
        Your visited page not found. You may go home page.
      </div>
      <Orangebutton text={"Back to home page"} />
    </div>
  );
};

export default Errorpage;
