import React from "react";
import Servicefeatures from "../components/Servicefeatures";
import aboutimg from "../assets/images/aboutimg.png";
import Salesdisplay from "../components/Salesdisplay";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";




const employeedetails= [
{
  name:'Tom Cruise',
  title:'Founder and Chairman',
  image: person1
},
{
  name:'Tom Cruise',
  title:'Founder and Chairman',
  image: person2
},
{
  name:'Tom Cruise',
  title:'Founder and Chairman',
  image: person3
}
]


const Aboutpage = () => {
  return (
    <div>
      <div className="">
      <div className="flex gap-[10px] items-center justify-center flex-wrap">
        <div className="w-full md:w-[500px]">
          <p className="text-[54px] font-semibold">Our story</p>
          <p className="text-[16px]">
            Launced in 2015, Exclusive is South Asia's premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-[16px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="h-[609px] w-[837] object-contain">
          <img src={aboutimg} alt="" className="max-h-[600px] w-auto h-auto"/>
        </div>
      </div>
      </div>
      <div className="mb-10">
      <Salesdisplay></Salesdisplay>
      </div>
      <div className="flex justify-center gap-2 flex-wrap">
       
      {
        employeedetails.map((item,index)=>{
          return (<div className="h-[564px] w-[370px]" key={index}>
            <div className="h-[430px] w-[370px] bg-[#f5f5f5] flex justify-end items-center flex-col">
              <img src={item.image} alt="images of our employees" className="h-auto w-auto" />
            </div>
            <div>
              <p className="text-[32px]">{item.name}</p>
              <p className="text-[16px]">{item.title}</p>
              <div className="flex gap-[10px] text-[20px]">
                <CiTwitter />
                <CiInstagram />
                <CiLinkedin />
              </div>
            </div>
          </div>)
        })
      }
      </div>
      <Servicefeatures></Servicefeatures>
    </div>
  );
};

export default Aboutpage;
