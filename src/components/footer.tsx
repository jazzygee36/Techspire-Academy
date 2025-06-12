import React from "react";
import HomeButton from "./button";
import HomeInput from "./input";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0E2A46] py-6">
        <div className="flex  justify-center gap-4 items-center py-4">
          <h1 className="text-xl font-bold text-white">Techspire</h1>
          <h3 className="text-white">Virtual class for Zoom</h3>
        </div>
        <div className="flex justify-center items-center flex-col gap-4 my-6">
          <h1 className="text-[#B2B3CF] font-medium">
            Subscribe to get our Newsletter
          </h1>
          <div className="flex gap-4 items-center">
            <HomeInput
              type={"email"}
              placeholder={"Your email"}
              height={"50px"}
            />
            <HomeButton
              title={"Subscribe"}
              type={"submit"}
              bg={"#704FE6"}
              width={"123px"}
              height={"50px"}
              borderRadius="20px"
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-center text-white py-2">
        <p className="text-xs">copyright @2025 all right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
