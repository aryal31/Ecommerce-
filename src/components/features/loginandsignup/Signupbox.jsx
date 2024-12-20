import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Orangebutton from '../../common/Orangebutton'

const Signupbox = () => {
  return (
    <div>
      <div className="flex flex-col">
        <p className="font-semibold text-[16px] lg:text-[20px] xl:text-[36px] mb-[10px]">
          Create your account
        </p>
        <label for="email" className="text-[16px]">
          Enter your details below
        </label>
        <input
          id="email"
          type="text"
          className="border-b-[1.5px] border-b-[#D9D9D9] focus:outline-none my-[40px]"
          placeholder="Name"
        />
        <input
          id="email"
          type="text"
          className="border-b-[1.5px] border-b-[#D9D9D9] focus:outline-none mb-[40px]"
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          className="border-b-[1.5px] border-b-[#D9D9D9] focus:outline-none"
          placeholder="Password"
        />
        <div className="flex items-center mt-[40px] flex-col gap-4">
        <Orangebutton className='h-[56px] w-full' text='Create Account' />

          <button className=" text-black rounded-sm h-[56px] w-full border-[#D9D9D9D9] border-[1.5px] flex items-center justify-center gap-2">
            <FaGoogle /> Sign Up With Google
          </button>
        </div>
      </div>
      <div className="gap-3 flex opacity-70 text-[16px] items-center justify-center">
        <span className="">Already have account?</span>
        <span className="font-semibold underline underline-offset-[6px]">
          <Link to="/login">Log in</Link>
        </span>
      </div>
    </div>
  );
};

export default Signupbox;
