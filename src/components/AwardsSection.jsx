import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

// Data for carousel
const highlights = [
  {
    title: "Upskill with Industry-Standard Courses",
    description:
      "We offer a wide range of IT courses including SQL, Python, Data Science, and more. Build your career with hands-on projects and expert guidance.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/24fa0bc9c14841b90f4b7142e1194a6c7c8eacc1aa8f2d651c885968b630c3d9?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    title: "Career Development",
    description:
      "Learn from industry experts and get placement assistance to secure a job in top companies. We support you from learning to earning.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e9d77c51e67159ad20ea8fc32f65deb0f7f35b6023eb9fae5a9f94cff866f7c7?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    title: "Join a Global Learning Community",
    description:
      "Be part of a global community of learners and professionals to share knowledge and experience. Networking opportunities and peer support are just a click away.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/189d66b2a85fc5e26b540ea826064b64caa15d34e3bb9d5e66aa267640ab6424?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
];

function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const props = useSpring({
    opacity: 1,
    transform: `translateX(-${currentIndex * 100}%)`,
    config: { duration: 500 },
  });

  return (
    <section className="relative flex flex-col items-center px-6 py-12 w-full bg-white">
      <div className="relative w-full max-w-4xl bg-neutral-100 rounded-lg overflow-hidden">
        <div className="relative overflow-hidden">
          <animated.div
            style={props}
            className="flex w-full"
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col items-center p-6"
              >
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-64 object-cover rounded-md"
                />
                <h2 className="text-2xl font-bold mt-4 text-center">
                  {highlight.title}
                </h2>
                <p className="text-base mt-4 text-center text-neutral-600 max-w-lg">
                  {highlight.description}
                </p>
              </div>
            ))}
          </animated.div>
        </div>

        <div className="absolute bottom-4 w-full flex justify-center">
          {highlights.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentIndex === index ? "bg-green-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
