import React from "react";
import CertificateCard from "./CertificateCard";
import Button from "./Button";
import TechWomenPic from '../../assets/img/tech-women.svg'

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
      <div>
        <img
          src={TechWomenPic}
          className="w-80 h-auto max-md:w-32"
          alt="women picture"
        />
      </div>
    </section>
  );
}

export default SpecializationsAndCertificates;
