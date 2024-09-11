import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-20 max-md:px-5">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-12 justify-between">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <div className="font-bold text-xl mb-4">
              <span>TOKAZ</span>
            </div>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Programs</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Courses</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Resources</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">All Offers</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-2">Popular Courses</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Python Basics</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Java Essentials</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Web Development</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-2">Self-Paced Courses</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Course Library</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Premium Pass</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition-colors">FAQs</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm">Follow us on:</span>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/12fc9835f9a796a0e8473aa7b59c3816c438b431f33afc7912e152aff78e78c1?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13" alt="Facebook" className="w-8 h-8"/>
                </a>
                <a href="#" aria-label="Twitter" className="hover:opacity-75 transition-opacity">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c79d3c61dae57d2f3c62fc60a83c4b513e1a21f55016d2d859beb6d451d3676a?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13" alt="Twitter" className="w-8 h-8"/>
                </a>
                <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fbdbef8b00154d9abec636f293850a42d7727e949a8b6a72dbc268e8865b0cb?placeholderIfAbsent=true&apiKey=f22fb14ac5c9489cb8e97f6f25e87b13" alt="Instagram" className="w-8 h-8"/>
                </a>
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              <span>&copy; 2024 QauntumStep. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
