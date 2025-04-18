import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaList, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Lottie from "lottie-react";
// import checkAnimation from "../assets/check-animation.json";
import lockAnimation from "../assets/shield-animation.json";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * A function that handles the click event on any Link component.
   * This is used to close the navbar when a user clicks on a link.
   * The function takes no arguments and simply sets the state of isOpen to false.
   */
  const handleLinkClick = () => {
    // Set the state of isOpen to false so that the navbar is hidden
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-600 p-3 flex justify-between items-center shadow-lg sticky top-0 z-50 backdrop-blur-lg bg-opacity-90 h-18"> {/* Height fix */}
      {/* Logo with Animation */}

      <Link to={"/"}>
        <div className="flex items-center space-x-2">
          <Lottie
            animationData={lockAnimation}
            loop={true}
            className="w-12 h-12 -ml-2"
          />
          <span className="text-white font-extrabold text-2xl bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            PassGuard
          </span>
        </div>
      </Link>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-white z-50 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6 animate-spin-in" />
        ) : (
          <FaBars className="w-6 h-6 animate-pulse" />
        )}
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-purple-600/95 md:bg-transparent flex-col md:flex-row items-center transition-all duration-300 ease-out overflow-hidden
        ${
          isOpen
            ? "max-h-screen py-4 opacity-100"
            : "max-h-0 md:max-h-full opacity-0 md:opacity-100"
        }`}
      >
        <NavItem
          to="/"
          icon={<FaHome />}
          text="Home"
          onClick={handleLinkClick}
        />
        <NavItem
          to="/about"
          icon={<FaList />}
          text="My Lists"
          onClick={handleLinkClick}
        />
        <NavItem
          to="/contact"
          icon={<FaEnvelope />}
          text="Contact"
          onClick={handleLinkClick}
        />
      </ul>
    </nav>
  );
};

// NavItem component is a functional component for rendering a navigation item
const NavItem = ({ to, icon, text, onClick }) => (
  // List item representing a single navigation link
  <li className="w-full md:w-auto">
    {/* React Router Link component for client-side navigation */}
    <Link
      to={to} // Destination path for the link
      className="flex items-center space-x-3 px-6 py-3 md:py-2 text-white hover:bg-white/10 md:hover:bg-transparent md:hover:text-yellow-300 transition-all duration-300 group" // Styling for link
      onClick={onClick} // Click event handler for the link
    >
      {/* Icon for the navigation item */}
      <span className="text-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform">
        {icon} {/* Icon passed as a prop */}
      </span>
      {/* Text label for the navigation item */}
      <span className="font-medium tracking-wide">{text}</span>
    </Link>
  </li>
);

export default Navbar;
