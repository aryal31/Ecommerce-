import { person1, person2, person3 } from "../../../assets/images";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const employeedetails = [
  {
    name: "Tom Cruise",
    title: "Founder and Chairman",
    image: person1,
  },
  {
    name: "Emma watson",
    title: "Sales Manager",
    image: person2,
  },
  {
    name: "Chris Pratt",
    title: "Marketting Chief",
    image: person3,
  },
];

const Employeedetails = () => {
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {employeedetails.map((item, index) => {
        return (
          <div className="h-[564px] w-[370px]" key={index}>
            <div className="h-[430px] w-[370px] bg-[#f5f5f5] flex justify-end items-center flex-col">
              <img
                src={item.image}
                alt="images of our employees"
                className="h-auto w-auto"
              />
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
          </div>
        );
      })}
    </div>
  );
};

export default Employeedetails;
