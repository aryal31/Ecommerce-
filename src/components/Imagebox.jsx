import React from "react";

const Imagebox = ({ qrcode, googleplay, appstore }) => {
  return (
    <div>
      <div className="flex">
        <div>
          <img src={qrcode} alt="" className="h-[80px]" />
        </div>
        <div className="flex flex-col gap-[3px]">
          <div>
            <img src={googleplay} alt="" className="p-[3px] h-[40px]" />
          </div>
          <div>
            <img src={appstore} alt="" className="p-[3px] h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagebox;
