"use client";

import { useEffect, useState } from "react";
import HomeButton from "@/components/button";
import CourseOne from "@/assets/images/firstcourse.svg";
import CourseTwo from "@/assets/images/secondcourse.svg";
import CourseThird from "@/assets/images/thirdcourse.svg";
import Image from "next/image";
import StarRatings from "react-star-ratings"; // Make sure the import is correct

const CourseCards = [
  {
    image: CourseOne,
    title: "HTML Web Development and Markup Fundamentals",
    lesson: "Lesson 3",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseTwo,
    title: "CSS Web Styling and Responsive Design Techniques",
    lesson: "Lesson 8",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseThird,
    title: "Bootstrap Web Development and Responsive UI Design",
    lesson: "Lesson 5",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseOne,
    title: "JavaScript Programming for Web Development and Interactivity",
    lesson: "Lesson 1",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseThird,
    title: "React Development for Modern Web Applications",
    lesson: "Lesson 4",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseThird,
    title: "Next.js Development for Full-Stack Web Applications",
    lesson: "Lesson 2",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseThird,
    title: "Node.js Development for Backend and API Services",
    lesson: "Lesson 2",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
  {
    image: CourseThird,
    title: "Version Control with Git: Track, Collaborate, and Deploy",
    lesson: "Lesson 5",
    hrs: "19h 30m",
    student: "Students 20+",
    name: "Samantha",
  },
];

const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  // Use array of ratings (one per course)
  const [ratings, setRatings] = useState<number[]>([]);

  useEffect(() => {
    const randomRatings = Array(CourseCards.length)
      .fill(0)
      .map(() => Math.floor(Math.random() * 5) + 1);

    setRatings(randomRatings);
  }, []);

  const handleRatingChange = (newRating: number, index: number) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = newRating;
    setRatings(updatedRatings);
  };

  const visibleCourses = showAll ? CourseCards : CourseCards.slice(0, 4);

  return (
    <div className="px-3 md:px-10 py-12 bg-[#F2F2F2]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-[#0E2A46] text-[25px] md:text-[40px] font-bold w-full md:w-[50%] text-center md:text-left leading-8 md:leading-12">
          Level Up Your Skills — Enroll in Techspire Courses Now.
        </h1>
        <div className="hidden md:block">
          <HomeButton
            title={showAll ? "Minimize Courses" : "Load more courses"}
            type={"button"}
            bg={"#704FE6"}
            width={"153px"}
            height={"55px"}
            borderRadius="20px"
            onClick={() => setShowAll(!showAll)}
          />
        </div>
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

            <div className="my-3">
              <StarRatings
                rating={ratings[index]}
                starRatedColor="#facc15"
                changeRating={(newRating: any) =>
                  handleRatingChange(newRating, index)
                }
                numberOfStars={5}
                starDimension="24px"
                starSpacing="3px"
                name={`rating-${index}`}
              />
            </div>
            <h2 className="text-[#0E2A46] text-[18px] font-bold mb-2">
              {course.title}
            </h2>
            <div className="flex items-center justify-between bg-white p-3 my-4">
              <p className="text-[#4D5756] text-[15px]">{course.lesson}</p>
              {/* <p className="text-[#4D5756] text-[15px]">{course.hrs}</p> */}
              <p className="text-[#4D5756] text-[15px]">{course.student}</p>
            </div>
            <div className="flex items-center justify-center">
              {/* <p className="text-[#17254E] text-[15px]">{course.name}</p> */}
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

      <div className="block md:hidden flex justify-center">
        <HomeButton
          title={showAll ? "Minimize Courses" : "Load more courses"}
          type={"button"}
          bg={"#17254E"}
          width={"153px"}
          height={"55px"}
          borderRadius="20px"
          onClick={() => setShowAll(!showAll)}
        />
      </div>
    </div>
  );
};

export default Courses;
