import Orangebutton from "../components/common/Orangebutton";
import { controller, visa, mastercard, paypal } from "../assets/images";

const CheckOutPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-[173px] flex-wrap">
        <div className="flex flex-col">
          <div className="md:mb-[48px] md:text-[36px] text-[20px]">
            Billing Detail
          </div>
          <label
            htmlFor="name"
            className="text-[black] opacity-40 md:text-[16px] text-[14px]"
          >
            First Name<sup className="text-red-900">*</sup>
          </label>
          <input
            className="md:h-[50px] md:w-[470px] bg-[#F5F5F5] mt-[8px] md:mb-[32px] h-[30px] w-[300px] focus:outline-none"
            type="text"
            id="name"
            required
          />

          <label
            htmlFor="companyname"
            className="text-[black] opacity-40 text-[16px]"
          >
            Company Name<sup className="text-red-900">*</sup>
          </label>
          <input
            className="md:h-[50px] md:w-[470px] bg-[#F5F5F5] mt-[8px] md:mb-[32px] h-[30px] w-[300px] focus:outline-none"
            type="text"
            id="companyname"
            required
          />

          <label
            htmlFor="streetadd"
            className="text-[black] opacity-40 text-[16px]"
          >
            Street Address<sup className="text-red-900">*</sup>
          </label>
          <input
            className="md:h-[50px] md:w-[470px] bg-[#F5F5F5] mt-[8px] md:mb-[32px] h-[30px] w-[300px] focus:outline-none"
            type="text"
            id="streetadd"
            required
          />

          <label
            htmlFor="apartment"
            className="text-[black] opacity-40 text-[16px]"
          >
            Apartment,floor,etc. (optional)
          </label>
          <input
            className="md:h-[50px] md:w-[470px] bg-[#F5F5F5] mt-[8px] md:mb-[32px] h-[30px] w-[300px] focus:outline-none"
            type="text"
            id="apartment"
            required
          />

          <label
            htmlFor="phone"
            className="text-[black] opacity-40 text-[16px]"
          >
            Phone Number<sup className="text-red-900">*</sup>
          </label>
          <input
            className="md:h-[50px] md:w-[470px] bg-[#F5F5F5] mt-[8px] md:mb-[32px] h-[30px] w-[300px]"
            type="text"
            id="phone"
            required
          />

          <label
            htmlFor="email"
            className="text-[black] opacity-40 text-[16px]"
          >
            Email<sup className="text-red-900">*</sup>{" "}
          </label>
          <input
            className="md:h-[50px] md:w-[470px] bg-[#F5F5F5] mt-[8px] md:mb-[32px] h-[30px] w-[300px]"
            type="email"
            id="email"
            required
          />

          <div className="flex mt-3">
            {" "}
            <input type="checkbox" className="accent-[#DB4444]" id="check" />
            <p className="pl-3">
              Save this information for faster check-out next time
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center mb-[32px]">
              {" "}
              <img src={controller} className="h-[40px] mr-3" alt="" />
              <p>LCD Monitor</p>
            </div>
            <div>$650</div>
          </div>
          <div className="flex justify-between mb-[32px]">
            <div className="flex items-center justify-center">
              <img src={controller} className="h-[40px] mr-3" alt="" />
              <p>H1 Gamepad</p>
            </div>
            <div>$1100</div>
          </div>

          <div className="flex justify-between">
            <div>Subtotal:</div>
            <div>$1750</div>
          </div>
          <div className="h-[1px] bg-black opacity-40 my-[16px]"></div>
          <div className="flex justify-between">
            <div>Shipping:</div>
            <div>Free</div>
          </div>
          <div className="h-[1px] bg-black opacity-40 mt-[16px] mb-[32px]"></div>
          <div className="flex justify-between">
            <div>Total:</div>
            <div>$1750</div>
          </div>
          <div className="flex mt-[32px]">
            <input type="radio" className="bank" />
            <label htmlFor="bank" className="ml-3">
              bank
            </label>
          </div>
          <div className="flex">
            <div className="">
              <input type="radio" className="deliveryoptions my-[32px]" />
              <label htmlFor="deliveryoptions" className="ml-3">
                Cash on delivery
              </label>
            </div>
            <div className="flex  ml-[100px] gap-4 items-center">
              <img src={visa} alt="" className="h-[50px]" />
              <img src={mastercard} alt="" className="h-[30px]" />
              <img src={paypal} alt="" className="h-[30px]" />
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              className="border-[1.5px] mr-[7px] pl-2"
              placeholder="Coupon code"
            />
            <Orangebutton text="Apply coupon" />
          </div>
          <div className="mt-[32px]">
            <Orangebutton text="Place Order" paddingx="6" paddingy="2" />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
