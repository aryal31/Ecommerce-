import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Orangebutton from "../components/common/Orangebutton";

const Contactpage = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[30px] mt-5">
      <div className="flex flex-col shadow w-full max-w-[340px] h-[457px] px-[20px] py-[40px]">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex items-center gap-4 mb-[24px]">
              <div className="bg-[#db4444] rounded-full h-[40px] w-[40px] items-center justify-center flex text-white text-[24px]">
                <IoCallOutline />
              </div>
              <div className="text-[24px] ">Call Us</div>
            </div>
            <div className="text-[16px] mb-[16px]">
              We are available 24/7, 7 days a week.
            </div>
            <div className="text-[16px]">Phone: +8801611112222</div>
          </div>
        </div>

        <hr className="w-auto border-[1.5px] border-b-[#FFFFFF] my-[32px]" />

        <div>
          <div className="flex items-center gap-4 mb-[24px]">
            <div className="bg-[#db4444] rounded-full h-[40px] w-[40px] items-center justify-center flex text-white text-[24px]">
              <CiMail />
            </div>
            <div className="text-[24px] ">Write To US</div>
          </div>
          <div className="text-[16px] mb-[16px]">
            Fill out our form and we will contact you within 24 hours.
          </div>
          <div className="text-[16px] mb-[16px]">
            Emails: customer@exclusive.com
          </div>
          <div>Emails: support@exclusive.com</div>
        </div>
      </div>

      <div className="flex flex-col shadow w-auto max-w-[800px] h-auto px-[32px] py-[40px] flex-wrap">
        <div className="flex flex-row gap-2 mb-[32px] flex-wrap">
          <div>
            <input
              type="text"
              className="w-[235px] h-[50px] bg-[#F5F5F5] pl-5 focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              className="w-[235px] h-[50px] bg-[#F5F5F5] pl-5 focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <input
              type="text"
              className="w-[235px] h-[50px] bg-[#F5F5F5] pl-5 focus:outline-none"
              placeholder="Your Phone"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <textarea
            name=""
            id=""
            placeholder="Your Massage"
            className="pl-5 pt-4 w-full bg-[#F5F5F5] focus:outline-none h-[207px] resize-none"
          ></textarea>
        </div>
        <div className="self-end mt-7">
          <Orangebutton text="Send Message"></Orangebutton>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
