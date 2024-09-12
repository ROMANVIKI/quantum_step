import React from "react";

function ProgramCard({ image, university, title, type, onClick }) {
  return (
    <article
      className="flex flex-col bg-white shadow-lg rounded-lg w-[260px] sm:w-[300px] p-4 border hover:shadow-xl transition-shadow duration-200 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="rounded-t-lg h-[160px] object-cover w-full"
      />
      <div className="mt-4">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={university.logo}
            alt={university.name}
            className="w-10 h-10 object-contain border rounded"
          />
          <span className="text-sm text-slate-500">{university.name}</span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-blue-700 mt-1">{type}</p>
      </div>
    </article>
  );
}

export default ProgramCard;
