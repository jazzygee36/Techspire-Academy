import HomeButton from "@/components/button";
import Image from "next/image";
import Flower from "@/assets/images/aboutflower.svg";
import AboutMain from "@/assets/images/aboutstand.svg";
import AboutDown from "@/assets/images/aboutdowning.svg";
import Experience from "@/assets/images/experience.svg";

const HomeAbout = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-6 py-10 w-full items-center bg-white">
      <div className="flex items-center justify-center">
        <div>
          {/* <Image src={Flower} alt="flower" /> */}
          <Image src={AboutMain} alt="main-about" />
        </div>
        <div>
          {/* <Image src={Experience} alt="about-down-pix" /> */}
          <Image src={AboutDown} alt="about-down-pix" />
        </div>
      </div>
      <div className="px-3 flex flex-col items-start justify-center text-center md:text-left">
        <p className="text-[#FE543D] text-md my-4 font-medium hidden md:block">
          {" "}
          ABOUT US
        </p>
        <h1 className="text-[#17254E] text-[25px] md:text-[50px]  font-bold leading-9 md:leading-14">
          Benefit from our online learning expertise earn
          <span className="text-[#FE543D]"> professional</span>.
        </h1>
        <p className="text-[#4D5756] text-[15px] my-2 w-[100%] ">
        Our platform is built by experienced
          educators and industry professionals who are passionate about helping
          you grow, upskill, and earn professionally recognized knowledge — from
          anywhere.
        </p>
        <p className="text-[#4D5756] text-[15px] my-2 w-[100%] ">
          With years of experience in online education and proven teaching
          strategies, Techspire is more than just a platform — it’s a launchpad
          for your future. Whether you're starting fresh or advancing your tech
          career, our expert-led courses are here to guide you every step of the
          way.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between my-6 gap-6">
          <div>
            <h3 className="text-[#0E2A46] text-[17px] font-bold">
              OUR MISSION:
            </h3>
            <p className="text-[#333931] text-[15px] ">
              To make quality tech education accessible to all by delivering
              engaging, career-focused online courses that inspire personal and
              professional growth.
            </p>
          </div>
          <div>
            <h3 className="text-[#0E2A46] text-[17px] font-bold">
              OUR VISSION:
            </h3>
            <p className="text-[#333931] text-[15px] ">
              To be a leading global platform that transforms lives through
              affordable, innovative, and impactful online learning in
              technology and beyond.
            </p>
          </div>
        </div>
        <div className="mt-3 flex m-auto">
          <HomeButton
            title={"Admission open"}
            type={"submit"}
            bg={"#17254E"}
            width={"123px"}
            height={"45px"}
            borderRadius="20px"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
