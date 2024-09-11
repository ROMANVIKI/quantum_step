import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const achievements = [
  { title: "Learners", value: 10000, text: "of Learners complete their courses within 3 months" },
  { title: "Mentors", value: 500, text: "of Mentors are experienced professionals" },
  { title: "Lines of Code Submission", value: 100000, text: "of Lines of Code submitted by users" },
  { title: "Videos", value: 500, text: "of Videos created and shared" },
];

function Counter({ value }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // Duration of animation in milliseconds
    const increment = value / (duration / 50); // Increment value based on the duration and frame rate

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < value) {
          return Math.min(prev + increment, value);
        } else {
          clearInterval(interval);
          return value;
        }
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-3xl font-bold text-blue-600">
      {Math.floor(count).toLocaleString()}
    </div>
  );
}

function AchievementsSection() {
  // Animation settings for fade-in
  const fadeProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  // Animation settings for statistics
  const statsProps = useSpring({
    from: { transform: "translateY(20px)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
    config: { duration: 600 },
  });

  return (
    <animated.section
      style={fadeProps}
      className="flex flex-col items-center px-5 py-2 mt-2 md:px-10 md:py-14 lg:px-20 lg:py-20 bg-white"
    >
      <div className="flex flex-col items-center w-full max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center text-neutral-800 mb-6 md:mb-10">
          We are proud of...
        </h2>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {achievements.map((achievement, index) => (
            <animated.div
              key={index}
              className="flex flex-col items-center p-4 bg-neutral-100 rounded-lg shadow-md w-full max-w-[350px] text-center"
              style={statsProps}
            >
              <Counter value={achievement.value} />
              <div className="text-lg font-semibold text-neutral-700 mt-2">{achievement.title}</div>
              <div className="text-lg text-neutral-600 mt-2">{achievement.text}</div>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.section>
  );
}

export default AchievementsSection;
