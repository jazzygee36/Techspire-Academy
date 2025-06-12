"use client"; // if you're using Next.js App Router

import { useState } from "react";
import HomeButton from "@/components/button";
import CourseOne from "@/assets/images/firstcourse.svg";
import CourseTwo from "@/assets/images/secondcourse.svg";
import CourseThird from "@/assets/images/thirdcourse.svg";
import Image from "next/image";

const CourseCards = [
  {
    image: CourseOne,
    title: "It Statistics Data Science And Business Analysis",
    lesson: "Lesson 10",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseTwo,
    title: "It Statistics Data Science And Business Analysis",
    lesson: "Lesson 10",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseThird,
    title: "It Statistics Data Science And Business Analysis",
    lesson: "Lesson 10",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
    {
    image: CourseOne,
    title: "It Statistics Data Science And Business Analysis",
    lesson: "Lesson 10",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseThird,
    title: "It Statistics Data Science And Business Analysis",
    lesson: "Lesson 10",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
];

const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? CourseCards : CourseCards.slice(0, 4);

  return (
    <div className="px-3 md:px-10 py-12 bg-[#F2F2F2]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-[#0E2A46] text-[25px] md:text-[40px] font-bold w-full md:w-[50%] text-center md:text-left leading-8 md:leading-12">
          Edunity Course Student Can Join With Us.
        </h1>
        {/* {!showAll && ( */}
          <div>
            <HomeButton
              title={showAll?  "Minimize Courses" : "Load more courses"}
              type={"button"}
              bg={"#704FE6"}
              width={"153px"}
              height={"55px"}
              borderRadius="20px"
              onClick={() => setShowAll(!showAll)}
            />
          </div>
        {/* )} */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {visibleCourses.map((course, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-[#704FE6]/[0.05] shadow-md border border-[#704FE6] border-dashed"
          >
            <Image
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-[#0E2A46] text-[18px] font-bold mb-2">
              {course.title}
            </h2>
            <div className="flex items-center justify-between bg-white p-3 my-4">
              <p className="text-[#4D5756] text-[15px]">{course.lesson}</p>
              <p className="text-[#4D5756] text-[15px]">{course.hrs}</p>
              <p className="text-[#4D5756] text-[15px]">{course.student}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[#17254E] text-[15px]">{course.name}</p>
              <HomeButton
                title={"Enroll Now"}
                type={"submit"}
                bg={"#704FE6"}
                width={"123px"}
                height={"45px"}
                borderRadius="20px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
