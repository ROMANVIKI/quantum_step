import React from 'react';

function CourseCard({ type, title, language, enrolled, languageIcon, enrolledIcon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4 max-w-sm w-full">
      <div className="flex items-center mb-4">
        <img src={languageIcon} alt={language} className="w-8 h-8 mr-2" />
        <span className="text-sm text-gray-600">{language}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{type}</p>
      <div className="flex items-center">
        <img src={enrolledIcon} alt="Enrolled Icon" className="w-5 h-5 mr-2" />
        <span className="text-sm text-gray-600">{enrolled} Enrolled</span>
      </div>
    </div>
  );
}

export default CourseCard;
