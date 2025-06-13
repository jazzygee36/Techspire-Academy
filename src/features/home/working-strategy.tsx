import React from "react";
import Startcourse from "@/assets/images/workprocess.svg";
import StartcourseTwo from "@/assets/images/workprocesstwo.svg";
import StartcourseThree from "@/assets/images/workprocessthree.svg";
import Image from "next/image";

const WorkProcessCard = [
  {
    icons: Startcourse,
    title: " Start Course",
    description:
      "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur",
  },
  {
    icons: StartcourseTwo,

    title: " Make Decision",
    description:
      "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur",
  },
  {
    icons: StartcourseThree,

    title: " Get A Certificate",
    description:
      "Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur",
  },
];

const WorkingStrategy = () => {
  return (
    <div className="py-8 px-3 md:px-8 text-center">
      <p className="text-[#674DF0] text-[16px] uppercase">Working Strategy</p>
      <h6 className="text-[#0E2A46] text-[25px] md:text-[40px] font-bold">
        Our Work Process
      </h6>

      <div className="grid grid-cols-1 md:grid-cols-3 my-6 gap-5 md:gap-5 lg:gap-10">
        {WorkProcessCard.map((work, index) => (
          <div
            key={index}
            className={` ${
              index === 1 && "text-white"
            } text-center border border-dotted rounded-xl p-7 md:p-5 lg:p-20 shadow ${
              index === 1 ? "bg-[#7768E5]" : "bg-white"
            } `}
          >
            <Image src={work.icons} alt="work process" className="m-auto" />
            <h1 className="text-[18px] font-bold uppercase my-4">
              {work.title}
            </h1>
            <p className="text-[14px]">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingStrategy;
