import React, { useState, useEffect } from 'react';

const Slider = ({ images, interval }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextImage = (currentImage + 1) % images.length;
      setCurrentImage(nextImage);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImage, images.length, interval]);

  return (
    <div className="slider-wrap">
      <div className="slider">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className={`slider-image`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;