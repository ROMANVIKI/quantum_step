import React from "react";
import { useSpring, animated } from '@react-spring/web';
import CourseCard from "./CourseCard";

const courses = [
  {
    type: "Premium",
    title: "Python",
    language: "Tamil",
    enrolled: 10,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b23f549c14728c4b4b2ecc2628411e727e514d66986d7db62d73ec5b4a02e1d1?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/91eaf9b8b4f6ff72ae32da7ff465f3c02038c9a0ae1f9f82f789d2f2415a2583?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    type: "Premium",
    title: "SQL",
    language: "Tamil",
    enrolled: 30,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b04bdd62fef75eebcb941081d3d8ac08fca496a7fc2c814f7a363620a008578?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/456a41c01c07d3ea09f1fc5925679664f65b9aa336b98dfeb1691ce7ad8601e5?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },

  {
    type: "Premium",
    title: "Sqlite",
    language: "Tamil",
    enrolled: 16,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b04bdd62fef75eebcb941081d3d8ac08fca496a7fc2c814f7a363620a008578?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b64475c86ea5608260be5c6c6611829963b90b45c00ef18a9c6f6d3e6a94ef86?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },

];



function CoursesSection() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <section className="flex flex-col items-center px-6 py-10 mt-20 w-full bg-white max-md:px-5 max-md:mt-10">
      <animated.h2 style={fadeIn} className="text-3xl font-bold leading-tight text-center text-neutral-800 mb-4">
        Learn Tech from Latest Courses
      </animated.h2>
      <p className="mt-3.5 text-lg leading-loose text-center text-neutral-500 mb-8">
        Explore 175+ Premium Courses with New Course Additions every Month.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mb-6 w-full">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
      <div className="flex gap-2 mt-8 justify-center w-full">
        {/* Pagination dots can be added here */}
      </div>
      <button className="px-6 py-3 mt-8 text-base text-center text-white bg-indigo-600 rounded border border-indigo-600 border-solid w-full max-w-xs max-md:mt-10">
        Explore Courses
      </button>
    </section>
  );
}

export default CoursesSection;
