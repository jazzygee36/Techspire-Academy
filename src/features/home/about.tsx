import HomeButton from "@/components/button";
import Image from "next/image";
import Flower from "@/assets/images/aboutflower.svg";
import AboutMain from "@/assets/images/aboutstand.svg";
import AboutDown from "@/assets/images/aboutdowning.svg";
import Experience from "@/assets/images/experience.svg";



const HomeAbout = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-6 py-10 w-full  bg-white">
      <div className="flex items-center justify-center">
        <div>
          <Image src={Flower} alt='flower'/>
          <Image src={AboutMain} alt='main-about'/>
          
        </div>
        <div>

          <Image src={Experience} alt='about-down-pix'/>
          <Image src={AboutDown} alt='about-down-pix'/>
          
        </div>
      </div>
      <div className="px-3 flex flex-col items-start justify-center">
        <p className="text-[#FE543D] text-md my-4 font-medium"> ABOUT US</p>
        <h1 className="text-[#17254E] text-[25px] md:text-[50px]  font-bold leading-9 md:leading-14">
          Benefit from our online learning expertise earn
          <span className="text-[#FE543D]">professional</span>.
        </h1>
        <p className="text-[#4D5756] text-[15px] my-3 w-[100%] md:w-[70%]">
          We are experienced in educational platform and skilled strategies for
          the success of our online learning.
        </p>

       
        <div className="flex flex-col md:flex-row items-center justify-between my-6 gap-6">
          <div>
            <h3 className="text-[#0E2A46] text-[17px] font-bold">OUR MISSION:</h3>
            <p className='text-[#333931] text-[15px] '>
              Suspendisse ultrice gravida dictum fusce placerat ultricies
              integer quis auctor elit sed vulputate mi sit.
            </p>
          </div>
          <div>
            <h3 className="text-[#0E2A46] text-[17px] font-bold">OUR VISSION:</h3>
            <p className='text-[#333931] text-[15px] '>
              {" "}
              Suspendisse ultrice gravida dictum fusce placerat ultricies
              integer quis auctor elit sed vulputate mi sit.
            </p>
          </div>
        </div>
         <div className="mt-3">
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
