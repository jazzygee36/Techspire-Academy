import React from "react";
import TopImage from "@/assets/images/students.svg";
import Image from "next/image";
import HomeButton from "@/components/button";
import HomeAbout from "@/features/home/about";
import Courses from "@/features/home/courses";
import Status from "@/features/home/status";

const Home = () => {
  return (
    <>
      <div className="py-6 md:py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-3 md:px-0  md:pl-10 items-center bg-[#704FE6]/[0.08]">
        <div className="text-center md:text-left ">
          <h3 className="text-[#704FE6] text-[17px] mb-2.5">
            Welcome Techspire online courses
          </h3>
          <h1 className="text-[#17254E] text-[25px] md:text-[50px]  font-bold leading-9 md:leading-14">
            Achieving Your Dreams Through{" "}
            <span className="text-[#704FE6]">Techspire</span>.
          </h1>
          <p className="text-[#333931] text-[15px] my-3 w-[100%] md:w-[70%]">
            We are experienced in educational platform and skilled strategies
            for the success of our online learning.
          </p>
          <div className="mt-2">
            <HomeButton
              title={"Find Courses"}
              type={"submit"}
              bg={"#17254E"}
              width={"123px"}
              height={"45px"}
              borderRadius="20px"
            />
          </div>
        </div>
        <div className='hidden md:block'>
          <Image src={TopImage} alt="top-banner" />
        </div>{" "}
      </div>
      <HomeAbout />
      <Courses/>
      <Status/>
    </>
  );
};

export default Home;
