import { useState, useEffect } from "react";
import logo from "../assets/logo/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex sm:sticky top-0 left-0 right-0 bg-white z-50 min-h-20 items-center px-10 lg:px-20
        ${isScrolled ? "border-b border-gray-100" : ""}`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="">
          <img src={logo} alt="airbnb clone logo" className="w-7 h-7" />
        </div>
        <div className="hidden sm:inline-block">
          <button className="px-7 py-3.5 rounded-full bg-linear-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] text-base font-medium text-white">Get started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
