import { useState } from 'react';
import Container from './Container';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Container>
        <nav className="flex justify-between items-center border-none px-4 py-4">
          <h1 className="font-bold text-xl">CS-Ticket System</h1>

          {/* Hamburger Icon - visible on mobile device */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  // Close icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700">
              FAQ
            </a>
            <a href="#" className="text-gray-700">
              Changelog
            </a>
            <a href="#" className="text-gray-700">
              Blog
            </a>
            <a href="#" className="text-gray-700">
              Download
            </a>
            <a href="#" className="text-gray-700">
              Contact
            </a>
            <button className="text-white px-2 py-2 rounded hover:cursor-pointer gradient-box-left">
              + New Ticket
            </button>
          </div>
        </nav>

        {/* Mobile Menu - toggles open/close */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
            <a href="#" className="text-gray-700">
              FAQ
            </a>
            <a href="#" className="text-gray-700">
              Changelog
            </a>
            <a href="#" className="text-gray-700">
              Blog
            </a>
            <a href="#" className="text-gray-700">
              Download
            </a>
            <a href="#" className="text-gray-700">
              Contact
            </a>
            <button className="text-white px-2 py-2 rounded hover:cursor-pointer gradient-box-left">
              + New Ticket
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
