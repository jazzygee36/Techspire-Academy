import PlayIcon from "@/assets/svg/play";
import HomeButton from "@/components/button";
import React from "react";

const JoinUs = () => {
  return (
    <div className="p-3 md:p-12 bg-[#0E2A46] flex items-center my-2">
      <div className="pl-[10%]">
        <p className='text-[18px] text-[#FE543D] '>Join Our New Session</p>
        <h2 className=" text-[25px] md:text-[40px] font-semibold text-white w-full md:w-[70%] ">Call To Enroll Your Child +2348136668316</h2>
        <div className="my-3">
          <HomeButton
            title={"Join Us"}
            type={"submit"}
            bg={"#704FE6"}
            width={"123px"}
            height={"45px"}
            borderRadius="20px"
          />
        </div>
      </div>
      <div className=" hidden md:block">
        <PlayIcon/>
      </div>
    </div>
  );
};

export default JoinUs;
