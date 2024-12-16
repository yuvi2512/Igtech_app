import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={handlePrev}>❮</button>
      <div className="slider-content">
        {items[currentIndex]}
      </div>
      <button className="arrow right" onClick={handleNext}>❯</button>
    </div>
  );
};

export default Slider;
