import React from "react";
import Servicefeatures from "../components/Servicefeatures";
import aboutimg from "../assets/images/aboutimg.png";
import Salesdisplay from "../components/Salesdisplay";

import Employeedetails from "../components/Employeedetails";

const Aboutpage = () => {
  return (
    <div>
      <div className="">
        <div className="flex gap-[10px] items-center justify-center flex-wrap">
          <div className="w-full md:w-[500px]">
            <p className="text-[54px] font-semibold">Our story</p>
            <p className="text-[16px]">
              Launced in 2015, Exclusive is South Asia's premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="text-[16px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="h-[609px] w-[837] object-contain">
            <img
              src={aboutimg}
              alt=""
              className="max-h-[600px] w-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="m-6">
        <Salesdisplay></Salesdisplay>
      </div>
      <Employeedetails></Employeedetails>
      <div className="md:my-9">
        <Servicefeatures />
      </div>
    </div>
  );
};

export default Aboutpage;
