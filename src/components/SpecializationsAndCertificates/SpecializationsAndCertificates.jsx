import React from "react";
import CertificateCard from "./CertificateCard";
import Button from "./Button";
import { useSpring, animated } from "@react-spring/web";
import TechWomenPic from "../../assets/img/tech-women.svg";

const certificatesData = [
  {
    provider: "Google",
    title: "Google Data Analytics",
    type: "Professional Certificate",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9283edafe4b578ead1b244319940206ba33ab82c200b06d70b4467d5a5ba9898?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
  {
    provider: "Google",
    title: "Google Project Management:",
    type: "Professional Certificate",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0f4d4992fdea8091814d2bdd213f85bc445fdd105fe550e959ce11c6c3c87a93?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
  },
];

function SpecializationsAndCertificates() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  return (
    <section className="flex flex-col justify-center px-4 py-8 max-w-full hidden max-sm:block">
      <header className="flex flex-col items-center text-center mb-6">
        <h1 className="font-semibold text-xl leading-7 text-purple-950">
          Specializations and Professional Certificates
        </h1>
        <h2 className="mt-2 text-2xl leading-tight text-neutral-900">
          Most Popular Certificates
        </h2>
        <p className="mt-2 text-lg leading-6 text-neutral-900">
          Explore our most popular programs, get job-ready for an in-demand
          career.
        </p>
      </header>
      <div className="flex flex-col justify-center items-center w-full">
        {certificatesData.map((certificate, index) => (
          <CertificateCard key={index} {...certificate} />
        ))}
      </div>
      {/* <div className="flex flex-col items-center mt-4 w-full">
        <Button primary>Show 8 more</Button>
        <Button secondary className="mt-2">View all</Button>
      </div> */}
      <animated.div
        style={fadeIn}
        className="flex flex-col items-center text-center"
      >
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
      <div>
        <img
          src={TechWomenPic}
          className="w-80 h-auto max-md:w-50"
          alt="women picture"
        />
      </div>
    </section>
  );
}

export default SpecializationsAndCertificates;
