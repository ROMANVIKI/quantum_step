import React from "react";

// Data for offerings
const offerings = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4f9675cb955bf00d27f49c00bf4f05c7c12764567c05f81d351c1d95932df5f?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "Self-paced Courses",
    description: "Learn & get certified via online courses",
    link: "Take a look",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1943dafdce690dbb8f6502edfb139168ee4132ceb7bea98427d413fed2ac199?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "LIVE Classes",
    description: "Upskill live online with placement guidance",
    link: "Take a look",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0262cd5c7b0583c45a94404aa11c51673ff35225c6246f615669b7b59069679e?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13",
    title: "For Corporates",
    description: "One-stop solution for training, hiring, & CSR",
    link: "Take a look",
  },
];

function OfferingsSection() {
  return (
    <section className="flex flex-col items-center mt-10 px-4 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold leading-tight text-gray-900 mb-8">
        What TOKAZ offers you?
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={offering.icon}
                alt={offering.title}
                className="w-16 h-16 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{offering.title}</h3>
              <p className="text-md text-gray-600 text-center mb-4">{offering.description}</p>
              <span className="text-blue-600 font-semibold">{offering.link}</span>
            </div>
          ))}
        </div>
        <div className="flex-none w-full md:w-1/3 flex justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b28fc56203300912f0d3878efa98702f3f402299de0d92648b7aa622671c21df?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13"
            alt="TOKAZ offerings illustration"
            className="w-full h-auto max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default OfferingsSection;
