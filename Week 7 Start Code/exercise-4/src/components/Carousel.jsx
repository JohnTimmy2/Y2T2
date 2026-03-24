import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLast = currentIndex === images.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={goToPrevious}
      />

      {/* Display the current image */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="slide"
      />

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={goToNext}
      />
    </div>
  );
};
