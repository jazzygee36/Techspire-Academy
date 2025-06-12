import React from "react";
import Image from "next/image";
import ValuePix from "@/assets/images/valuepix.svg";

const Status = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-around items-center p-4 md:p-8">
      <div className="">
        <p className="text-[#FE543D] text-md my-4 font-medium">
          {" "}
          OUR STATUS VALUE
        </p>
        <h1 className="text-[#17254E] text-[25px] md:text-[50px] w-full md:w-[70%]  font-bold leading-9 md:leading-14">
          Our Classroom Is A Very Different <span className="text-[#FE543D]"> School </span> Than All The Others
        </h1>
        <p className="text-[#4D5756] text-[15px] my-3 w-[100%] md:w-[70%]">
          We are experienced in educational platform and skilled strategies for
          the success of our online learning.
        </p>
      </div>
      <div>
        <Image src={ValuePix} alt="value" />
      </div>
    </div>
  );
};

export default Status;
