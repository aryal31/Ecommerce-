import { useState, useRef, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
];

const Top = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const dropdownRef = useRef();

  const toggleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black h-8 text-white text-sm pt-1 flex items-center justify-end md:justify-center px-[30px] md:px-[40px] lg:px-[135px]">
      <div className="text-center flex-1 hidden md:block">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a className="font-bold pl-[10px] underline cursor-pointer">shopNow</a>
      </div>
      <div className="flex items-center justify-end md:justify-center relative">
        <p>{selectedLanguage.name}</p>
        <SlArrowDown
          onClick={toggleDropdownOpen}
          className="ml-[8px] text-[16px] cursor-pointer"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        />
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-[30px] right-0 bg-black h-auto w-[95px] text-center pr-2 z-50"
            role="menu"
          >
            <ul>
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-700"
                  role="menuitem"
                >
                  {lang.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Top;
