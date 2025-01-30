import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-200 dark:bg-gray-800 shadow">
      <div className="flex space-x-4">
        <Link to="/" className="text-gray-800 dark:text-gray-200 font-medium hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-gray-800 dark:text-gray-200 font-medium hover:underline">
          About Us
        </Link>
        <Link to="/contact" className="text-gray-800 dark:text-gray-200 font-medium hover:underline">
          Contact Us
        </Link>
      </div>
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
