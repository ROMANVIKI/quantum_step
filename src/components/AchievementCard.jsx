import React from "react";

function AchievementCard({ title, value }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col grow items-center px-14 py-3.5 w-full font-bold text-center whitespace-nowrap rounded bg-neutral-100 max-md:px-5 max-md:mt-4">
        <div className="text-4xl leading-none text-indigo-600">{value}</div>
        <div className="mt-6 text-lg leading-loose text-neutral-500">
          {title}
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;
