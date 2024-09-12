import React from "react";
import GenAIFilter from "./GenAIFilter";
import GenAICard from "./GenAICard";

const GenAIStarted = () => {
  const filters = [
    { name: "Beginner", active: true },
    { name: "Popular", active: false },
    { name: "New", active: false },
    { name: "Tools", active: false },
  ];

  const cards = [
    {
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/e23a86ceb2214df71a6ac26e539467303f1b33a795d971e15ab80e07852e923a?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
      company: "IBM",
      title: "Generative AI Fundamentals",
      type: "Specialization",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f68c66e210846d5b8fd8c424579e5ad7d817794543cec7c3d091c726af87c345?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    },
    {
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c85792ef8c920be3e485a592663076c0b34562bbaaef3edc5d8fb2dbcc275a4?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
      company: "DeepLearning.AI",
      title: "AI for Good",
      type: "Specialization",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/648f19fbee2c45fb7ed6151d6f2d082113deb617dd47bb3150864115b41aff49?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    },
  ];

  return (
    <section className="flex flex-col justify-center px-4 py-6 bg-sky-100 max-w-full sm:hidden mx-auto">
      <div className="flex flex-col justify-center items-center w-full max-w-[334px] mx-auto">
        <header className="flex flex-col px-1 pt-1 pb-5 w-full text-neutral-900">
          <h1 className="w-full text-2xl font-semibold tracking-normal leading-tight text-center">
            Get started with GenAI
          </h1>
          <p className="mt-2 w-full text-sm leading-6 text-center">
            Identify, develop, and execute impactful GenAI business strategies.
          </p>
        </header>
        <div className="flex flex-col items-center p-1 w-full min-h-[372px]">
          <div className="flex flex-col w-full">
            <GenAIFilter filters={filters} />
            <div className="flex flex-col pt-4 pb-6 w-full">
              {cards.map((card, index) => (
                <GenAICard key={index} {...card} />
              ))}
            </div>
            <div className="flex justify-center w-full">
              <button className="px-8 py-3 bg-blue-700 rounded text-white font-semibold">
                View all GenAI
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAIStarted;
