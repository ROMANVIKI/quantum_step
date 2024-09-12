import React from "react";
import { useSpring, animated } from '@react-spring/web';
import ZenClassCard from "./ZenClassCard";
import TechWomenPic from '../assets/img/tech-women.svg';

const zenClasses = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa43c38b61dad16c76c71cf46fc048eb16f97fc45e0641311eb5ccb3d8f30d80?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "Full Stack Development",
    description: "Learn Javascript, HTML, CSS & more",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ba020d95ac7c3e57179625090259e747dc91c2edf3eb38e842a02a1e4bf3b4a?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "Data Science",
    description: "Learn Python, NLP, Tableau & more",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/386c671ecc825e663024a7527d58e05796328c1f3f609e30979d2aca22cf644f?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "UI UX Design",
    description: "Learn UI UX principles, Figma, Miro & more",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1352373af699b0dcc79079194323e23993e699f39ee5340e2888234540f6240?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "Automation & Testing",
    description: "Learn Selenium, Python, Java & more",
  },
];

function ZenClassSection() {
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
    <section className="flex flex-col items-center px-6 py-10 mt-10 max-w-full bg-gray-100 max-md:px-4 max-md:py-8 max-md:mt-6">
      <animated.div style={fadeIn} className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold leading-tight text-neutral-800 mb-4 max-md:text-3xl">
          ZEN CLASS
        </h2>
        <div className="flex items-center gap-4 mb-6 max-md:gap-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e2895636ec1d39399e3b5d9292f0206527a1db8f6328c8212b3b227c1fbffd8?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13"
            alt="Zen Class"
            className="w-6 h-6 object-contain max-md:w-4 max-md:h-4"
          />
          <p className="text-lg font-medium text-neutral-600 max-md:text-base">
            Live Classes + Placement Guidance
          </p>
        </div>
      </animated.div>
      <div className="flex flex-wrap gap-2 justify-center mt-8 max-md:mt-6 max-md:flex-col max-md:gap-4">
        {zenClasses.map((zenClass, index) => (
          <animated.div
            key={index}
            style={fadeIn}
            className="flex flex-col items-center w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 max-md:transform-none"
          >
            <ZenClassCard {...zenClass} />
          </animated.div>
        ))}
      </div>
      <animated.button
        style={buttonSpring}
        className="px-6 py-3 mt-12 text-lg font-semibold text-white bg-indigo-600 rounded-lg border border-indigo-700 shadow-lg transition-transform duration-300 ease-in-out hover:bg-indigo-700 hover:shadow-xl max-md:mt-8 max-md:py-2 max-md:text-base"
      >
        Explore More Programs
      </animated.button>
    </section>
  );
}

export default ZenClassSection;
