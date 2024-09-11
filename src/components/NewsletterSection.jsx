import React from "react";

function NewsletterSection() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 md:px-16">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col mb-8 md:mb-0 w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Stay in Touch for Updates & Offers!
            </h2>
            <p className="text-sm mb-6">
              Subscribe to our newsletter for alerts on New Courses, Free Workshops, & Masterclasses.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="email" className="sr-only">
                Enter your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 text-base bg-white rounded text-gray-800 mb-4 sm:mb-0"
              />
              <button
                type="submit"
                className="px-6 py-2 text-base font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700"
              >
                Subscribe Now
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/db6c7acabce1fabafb33a0a92b27217aad9b1918c9e9cbe17a1d6407a30b6109?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13"
              alt="Newsletter illustration"
              className="object-contain w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default NewsletterSection;
