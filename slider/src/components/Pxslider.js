
import React, { useState, useEffect } from 'react';
import '../pxslider.css';

const Pxslider = ({ images, parallaxIntensity = 0.5, transitionSpeed = 0.5 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="parallax-slider-container">
      <div
        className="parallax-slider"
        style={{
          transform: `translateX(-${currentSlide * 100}%) translateY(${scrollPosition * parallaxIntensity}px)`,
          transition: `transform ${transitionSpeed}s ease-in-out`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Pxslider;
