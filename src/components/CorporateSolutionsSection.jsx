import React from "react";
import CorporateSolutionCard from './CorporateSolutionCard'
import { motion } from "framer-motion";

const solutions = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb935460c1b0b8c2f86003734d1c686e35106616ed38078ed1780a736aa40f93?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "Specialized",
    subtitle: "Corporate Training",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e581ad1c206730b2ad4b38f7aff348b9f88ddf59969b3a3c3ca148d67574def?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "Streamlined",
    subtitle: "Corporate Hiring",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/282329f67f1c992138d85130f9a5671f0d30e9f3a2fcd2875f191191c86179d1?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "Corporate",
    subtitle: "Social Responsibility",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dddcf892a997c69d747e262090a3264f6d071d6754096f050c5f4170280167b2?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "HYRE",
    subtitle: "Assessment",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d43696503cf2d40da7c225846f363568d0e2fd3a6878741e0cdbda1fcaad987?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "End-to-End",
    subtitle: "Campus Hiring",
  },
];

function CorporateSolutionsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center mt-20 px-5 max-w-full md:px-10 lg:px-20"
    >
      <h2 className="text-4xl font-extrabold leading-tight text-center text-neutral-800 mb-4">
        QuantumStep for Corporates
      </h2>
      <p className="text-lg text-center text-neutral-600 mb-8 max-w-3xl">
        Explore our customized corporate solutions for your company!
      </p>
      <div className="flex flex-wrap gap-6 justify-center mt-8 w-full max-w-screen-xl">
        {solutions.map((solution, index) => (
          <CorporateSolutionCard key={index} {...solution} />
        ))}
      </div>
      <button className="px-6 py-3 mt-12 text-lg font-semibold text-center text-white bg-indigo-600 rounded shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Learn More
      </button>
    </motion.section>
  );
}

export default CorporateSolutionsSection;
