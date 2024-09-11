/**
 * This code was generated by Builder.io.
 */
import React from "react";

function CourseCard({
  type,
  title,
  language,
  enrolled,
  languageIcon,
  enrolledIcon,
}) {
  return (
    <div className="flex overflow-hidden flex-col flex-1 items-start pt-24 pr-12 pb-3 pl-3 bg-white rounded-md max-md:pr-5">
      <div className="px-3 py-1.5 text-base text-white whitespace-nowrap rounded">
        {type}
      </div>
      <h3 className="mt-7 font-bold leading-none text-neutral-800">{title}</h3>
      <div className="flex gap-1 mt-3 leading-loose whitespace-nowrap">
        <img
          loading="lazy"
          src={languageIcon}
          alt=""
          className="object-contain shrink-0 self-start bg-blend-normal aspect-square w-[18px]"
        />
        <div>{language}</div>
      </div>
      <div className="flex gap-1 mt-2 leading-loose">
        <img
          loading="lazy"
          src={enrolledIcon}
          alt=""
          className="object-contain shrink-0 self-start w-5 bg-blend-normal aspect-square"
        />
        <div className="basis-auto">{enrolled} Enrolled</div>
      </div>
    </div>
  );
}

export default CourseCard;
