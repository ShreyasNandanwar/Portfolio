// src/pages/LandingPage.jsx

import React, { useContext } from 'react';
import { Header } from '../components'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
// import PropTypes from 'prop-types'

const LandingPage = () => {
  const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);

  return (
    <div className={`h-[90vh] w-[90vw] bg-cover bg-center mx-auto my-8 rounded-2xl relative overflow-hidden ${isDarkMode ? 'bg-dark-hero' : 'bg-light-hero'} `}>

      <div className="bg-black bg-opacity-10 absolute inset-0 rounded-2xl flex flex-col">

        {/* Cool Header */}
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />


        {/* Hero Content */}
        <div className="flex-grow flex flex-col justify-center items-center h-full pb-20">
          <h1 className="font-playfair dark:text-white text-blue-900 text-6xl font-extrabold mb-7 tracking-wider animate-slidein opacity-0 [--slidein-delay:300ms] ">
            Hello, I am Shreyas Nandanwar.
          </h1>
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'AI Enthusiast',
              2000,
              'Problem Solver',
              2000,
              'Continuous Learner',
              2000
            ]}
            wrapper="p"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            className="font-playfair text-red-500 font-semibold tracking-wider animate-slidein opacity-0 [--slidein-delay:500ms] text-5xl"
          />
          <Link to="/about" className="font-roboto mt-10 px-6 py-3 font-bold bg-red-600 text-white rounded tracking-wider hover:bg-red-700 transition duration-300 animate-slidein opacity-0 [--slidein-delay:700ms]">About me</Link>
        </div>

      </div>
    </div>
  )
}

// LandingPage.PropTypes = {
//   toggleDarkMode: PropTypes.func.isRequired,
//   isDarkMode: PropTypes.bool.isRequired,
// }

export default LandingPage;
