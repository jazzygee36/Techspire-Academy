'use client';
import React, { useState } from "react";
import HomeButton from "./button";
import { useRouter } from "next/navigation";
import ToggleMenu from "@/assets/svg/toggle-menu";


const Links = [
  { name: "Home", path: "/home" },
  { name: "About us", path: "/about-us" },
  // { name: "Courses", path: "/" },
  // { name: "Contact", path: "/" },
  // { name: "Login", path: "/login" },
];

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-[#17254E] text-white p-3 w-full hidden md:block"></div>

      <div className="flex justify-between items-center p-4 md:px-10 w-full">
        <h1 className="text-xl font-bold text-[#0E2A46]">Techspire Academy</h1>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "X": <ToggleMenu /> }
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex-col md:flex-row md:flex gap-6 items-center ${isOpen ? 'flex' : 'hidden'} md:static absolute top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-10`}>
          {Links.map((link, index) => (
            <div
              key={index}
              onClick={() => {
                router.push(link.path);
                setIsOpen(false); // close menu on mobile after click
              }}
              className="text-[#0E2A46] text-[15px] cursor-pointer hover:text-[#704FE6] transition-colors"
            >
              {link.name}
            </div>
          ))}

          {/* <div className="mt-4 md:mt-0">
            <HomeButton
              title={"Create Account"}
              type={"submit"}
              bg={"#704FE6"}
              width={"123px"}
              height={"45px"}
              borderRadius="20px"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
