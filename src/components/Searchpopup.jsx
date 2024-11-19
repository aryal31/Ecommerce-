import { CiSearch } from "react-icons/ci";

const Searchpopup = ({ onClose }) => {
  return (
    <div className="fixed items-center mt-[170px] flex flex-col bg-black bg-opacity-50 inset-0 z-50">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg">
        <div className="flex">
          <input
            type="text"
            placeholder="what are you looking for?"
            className="bg-transparent w-full focus:outline-none"
          />
          <CiSearch className="text-[25px]" />
        </div>
      </div>
      <div
        onClick={onClose}
        className="text-white underline underline-offset-2 cursor-pointer"
      >
        close
      </div>
    </div>
  );
};

export default Searchpopup;
