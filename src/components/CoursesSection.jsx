import React from "react";
import { useSpring, animated } from '@react-spring/web';
import CourseCard from "./CourseCard";

const courses = [
  {
    type: "Free",
    title: "JDBC",
    language: "Hindi",
    enrolled: 2002,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b23f549c14728c4b4b2ecc2628411e727e514d66986d7db62d73ec5b4a02e1d1?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/91eaf9b8b4f6ff72ae32da7ff465f3c02038c9a0ae1f9f82f789d2f2415a2583?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    type: "Free",
    title: "SQL",
    language: "Tamil",
    enrolled: 2014,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b04bdd62fef75eebcb941081d3d8ac08fca496a7fc2c814f7a363620a008578?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/456a41c01c07d3ea09f1fc5925679664f65b9aa336b98dfeb1691ce7ad8601e5?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    type: "Free",
    title: "SQL",
    language: "Bengali",
    enrolled: 2004,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b04bdd62fef75eebcb941081d3d8ac08fca496a7fc2c814f7a363620a008578?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/126988f74dff20557dcdb5843fce513c4756abb0db65ca35a4823d065d203c91?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    type: "Free",
    title: "Sqlite",
    language: "Tamil",
    enrolled: 2005,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b04bdd62fef75eebcb941081d3d8ac08fca496a7fc2c814f7a363620a008578?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b64475c86ea5608260be5c6c6611829963b90b45c00ef18a9c6f6d3e6a94ef86?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    type: "Premium",
    title: "MongoDB",
    language: "English",
    enrolled: 70047,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b04bdd62fef75eebcb941081d3d8ac08fca496a7fc2c814f7a363620a008578?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b64475c86ea5608260be5c6c6611829963b90b45c00ef18a9c6f6d3e6a94ef86?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    type: "Premium",
    title: "MongoDB",
    language: "Tamil",
    enrolled: 7922,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b04bdd62fef75eebcb941081d3d8ac08fca496a7fc2c814f7a363620a008578?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/52d777869e26a3705d6982c3c8aac0aeac7faa54eb4a2837194eaba693673032?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    type: "Premium",
    title: "Redis with Python RESTfull API",
    language: "English",
    enrolled: 24155,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b04bdd62fef75eebcb941081d3d8ac08fca496a7fc2c814f7a363620a008578?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/52d777869e26a3705d6982c3c8aac0aeac7faa54eb4a2837194eaba693673032?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    type: "Premium",
    title: "Apache Cassandra With Python",
    language: "English",
    enrolled: 6368,
    languageIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4b04bdd62fef75eebcb941081d3d8ac08fca496a7fc2c814f7a363620a008578?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    enrolledIcon:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/52d777869e26a3705d6982c3c8aac0aeac7faa54eb4a2837194eaba693673032?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
];

function CoursesSection() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const buttonSpring = useSpring({
    from: { transform: 'scale(1)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'scale(1.05)', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)' });
        await next({ transform: 'scale(1)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' });
      }
    },
    config: { tension: 180, friction: 12 },
  });

  return (
    <section className="flex flex-col items-center px-6 py-20 mt-24 w-full bg-white max-md:px-5 max-md:mt-10">
      <animated.h2 style={fadeIn} className="text-3xl font-bold leading-tight text-center text-neutral-800">
        Learn Tech from Latest Courses
      </animated.h2>
      <p className="mt-3.5 text-lg leading-loose text-center text-neutral-500">
        Explore 175+ Premium Courses with New Course Additions every Month.
      </p>
      <div className="flex mt-5 mb-6 max-w-full text-xs text-center w-full justify-center">
        {/* Course categories */}
      </div>
      <animated.div style={fadeIn} className="flex flex-wrap items-start justify-center gap-6 w-full max-md:gap-4 max-md:mt-10">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </animated.div>
      <div className="flex gap-2 mt-8 max-w-full justify-center">
        {/* Pagination dots */}
      </div>
      <animated.button
        style={buttonSpring}
        className="px-8 py-4 mt-14 text-base text-center text-white bg-indigo-600 rounded-lg border border-indigo-700 shadow-lg transition-transform duration-300 ease-in-out hover:bg-indigo-700 hover:shadow-xl"
      >
        Explore Courses
      </animated.button>
    </section>
  );
}

export default CoursesSection;
