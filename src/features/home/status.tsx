import React from "react";
import Image from "next/image";
import ValuePix from "@/assets/images/valuepix.svg";

const Status = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-12 gap-8 bg-white">
      <div className="flex flex-col text-center md:text-left items-center md:items-start">
        <p className="text-[#FE543D] text-sm md:text-base mb-4 font-medium">
          OUR STATUS VALUE
        </p>
        <h2 className="text-[#17254E] text-[28px] md:text-[50px] font-bold leading-[38px] md:leading-[60px] w-full md:w-[90%]">
          Our Classroom Stands
          <span className="text-[#FE543D]"> Apart </span> from the Rest
        </h2>
        <p className="text-[#4D5756] text-sm md:text-base my-3 w-full md:w-[90%]">
          At <strong>Techspire</strong>, we offer more than just online lessons — we deliver a
          transformative learning experience. Backed by years of expertise in
          digital education, our teaching strategies are carefully designed to
          ensure real results and lasting success.
        </p>
        <p className="text-[#4D5756] text-sm md:text-base my-3 w-full md:w-[90%]">
          Whether you're learning from home or on the go, our virtual classroom
          is built to inspire, engage, and help you thrive.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src={ValuePix}
          alt="Illustration representing our unique classroom experience"
          className="w-[85%] md:w-[70%] h-auto"
        />
      </div>
    </section>
  );
};

export default Status;
