
import React, { useState, useRef, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import '../pxslider.css';

const PxSlider = ({ images, parallaxIntensity = 0.2, slideContent = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const { offsetTop, offsetHeight } = sliderRef.current;
      const isVisible =
        scrollPosition + window.innerHeight > offsetTop && scrollPosition < offsetTop + offsetHeight;

      if (isVisible) {
        const parallaxOffset = (scrollPosition - offsetTop) * parallaxIntensity;
        sliderRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [parallaxIntensity]);

  const changeSlide = (increment) => {
    setCurrentSlide((prevSlide) => (prevSlide + increment + images.length) % images.length);
  };

  return (
    <div className="parallax-slider-container" ref={sliderRef}>
      <Parallax bgImage={images[currentSlide]} strength={200}>
        <div className="parallax-slide">
          {slideContent[currentSlide] ? (
            slideContent[currentSlide]
          ) : (
            <>
              <h2>Slide {currentSlide + 1}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </>
          )}
        </div>
      </Parallax>
      <button className="prev" onClick={() => changeSlide(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => changeSlide(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default PxSlider;

