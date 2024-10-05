import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const Header = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <header className="p-6 flex justify-between items-center transition duration-500 ease-in-out">
      <Link to="/" className=" text-blue-950 dark:text-white dark:hover:text-red-500 text-3xl p-1 font-bold border-red-500 border-2 rounded-t-full hover:text-red-500 hover:rounded-full hover:border-blue-950 dark:hover:border-white transition duration-600">SN</Link>

      <nav className="flex items-center space-x-6">
        <button onClick={toggleDarkMode}
          className={`${isDarkMode ? 'text-white': 'text-blue-950' } focus:outline-none transition duration-500 ease-in-out`}>
          {isDarkMode ? (
            <ion-icon name="sunny"></ion-icon>
          ) : (
            <ion-icon name="moon"></ion-icon>
          )}
        </button>
        <Link to="/projects" className="font-semibold text-blue-950 dark:text-white hover:text-red-500 transition duration-500 ease-in-out ">Projects</Link>
        <Link to="/contact" className="text-blue-950 font-semibold hover:text-red-500 dark:text-white transition duration-500 ease-in-out">Contact</Link>
        <Link to="/resume" className="px-4 py-2 bg-red-600 text-white rounded font-semibold dark:text-white hover:bg-red-700 transition duration-500 ease-in-out">Resume</Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Header
