import React from "react";

function ZenClassCard({ icon, title, description }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start py-6 pr-20 pl-6 mx-auto w-full text-base bg-white rounded-lg text-neutral-800 max-md:px-4 max-md:py-4">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain w-10 aspect-square max-md:w-8"
        />
        <h3 className="mt-2 text-2xl font-bold leading-tight max-md:text-xl">
          {title}
        </h3>
        <p className="mt-4 text-base max-md:text-sm text-neutral-600">
          {description}
        </p>
        <a href="#" className="flex gap-4 mt-6 font-medium text-green-600 max-md:text-sm">
          <span>Know More</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdabc98afaaa99fe4e116f99bdb44e5c358dcbfd39d3f96e8e2e792e6f0bd028?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13"
            alt=""
            className="object-contain shrink-0 my-auto w-3 bg-blend-normal max-md:w-2.5"
          />
        </a>
      </div>
    </div>
  );
}

export default ZenClassCard;
