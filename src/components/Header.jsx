import React, { useState } from "react";
import NavItem from "./NavItem";

const navItems = [
  { label: "Courses", href: "#" },
  { label: "LIVE Classes", href: "#", hasDropdown: true },
  { label: "Practice", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Our Solutions", href: "#", hasDropdown: true },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6">
      <div className="flex flex-wrap justify-between items-center w-full max-w-screen-xl mx-auto text-base text-gray-500">
        <p className="text-2xl font-bold text-blue-600">TOKAZ</p>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className={`hidden lg:flex lg:gap-6 lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                {...item}
                className="px-3 py-2 rounded hover:bg-blue-100 transition-colors"
              />
            ))}
            <button className="px-4 py-2 font-medium text-blue-500 hover:text-blue-700 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded transition-colors">
              Sign up
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md fixed inset-x-0 top-16 py-4 px-6">
          <div className="flex flex-col gap-4">
            {/* <button
              onClick={closeMenu}
              className="self-end text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                {...item}
                className="block px-3 py-2 rounded hover:bg-blue-100 transition-colors"
              />
            ))}
            <button className="w-full px-4 py-2 font-medium text-blue-500 hover:text-blue-700 transition-colors">
              Login
            </button>
            <button className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded transition-colors">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
