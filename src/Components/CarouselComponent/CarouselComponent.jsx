import { useState, useEffect } from 'react';
import MainCarousel from '../CarouselComponent/MainCarousel.jsx';
import Visibility from '../CarouselComponent/Visibility.jsx';
import Insight from '../CarouselComponent/Insight.jsx';
import Values from '../CarouselComponent/Values.jsx';
import "../../Sass/Home.css";

function CarouselComponent() {
  const [position, setPosition] = useState(0); // Using state to track position

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCarousel = (section) => {
    handleScrollToSection(section);
    setPosition(pictures.findIndex((picture) => picture.key === section)); // Update position based on the section key
  };

  const pictures = [
    { key: 'main', component: <MainCarousel onScrollToSection={handleScrollToCarousel} /> },
    { key: 'visibility', section: 'visibility', component: <Visibility onScrollToSection={handleScrollToSection} /> },
    { key: 'insight', section: 'insight', component: <Insight onScrollToSection={handleScrollToSection} /> },
    { key: 'values', section: 'values', component: <Values onScrollToSection={handleScrollToSection} /> },
  ];

  const moveRight = () => {
    setPosition((prevPosition) => (prevPosition + 1) % pictures.length);
  };

  const moveLeft = () => {
    setPosition((prevPosition) =>
      prevPosition === 0 ? pictures.length - 1 : prevPosition - 1
    );
  };

  useEffect(() => {
    // Automatically move to the next slide every 10 seconds
    const intervalId = setInterval(moveRight, 10000);

    // Clear the interval when the component unmounts or when position changes
    return () => clearInterval(intervalId);
  }, [position]); // Re-run effect when position changes

  return (
    <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
      <div className="carouselparent">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <button id="left-btn" className="caros" onClick={moveLeft}><i className="arrow"></i></button>
              {pictures[position].component} {/* Render the selected component */}
              <button id="right-btn" className="caros" onClick={moveRight}><i className="arrow"></i></button>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default CarouselComponent;
