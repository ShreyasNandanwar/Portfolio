import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeContext } from '../context/ThemeContext';

import { ProjectCard } from '../components'
import { Header } from '../components'

const ProjectPage = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,  // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className={`h-[90vh] w-[90vw] bg-cover bg-center mx-auto my-8 rounded-2xl relative overflow-hidden bg-[rgba(54,99,180,0.5)] border border-[rgba(54,99,180,0.25)] backdrop-blur-md ${isDarkMode ? 'bg-dark-hero' : 'bg-light-hero'} `}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Slider {...settings}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Slider>
    </div>
  );
};

export default ProjectPage;
