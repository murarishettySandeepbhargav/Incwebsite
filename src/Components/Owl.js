import React, { useRef } from "react";
import Slider from "react-slick";
import "./Owl.css"; // Custom styles

const Carousel = () => {
  const sliderRef = useRef(null);

  // Slick settings for the carousel (no prev/next buttons)
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable next and prev arrows
  };

  // Mouse wheel handler to trigger slide change
  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scrolling behavior

    if (sliderRef.current) {
      if (e.deltaY > 0) {
        // Scroll down - move to next slide
        sliderRef.current.slickNext();
      } else {
        // Scroll up - move to previous slide
        sliderRef.current.slickPrev();
      }
    }
  };

  return (
    <div
      className="carousel-container"
      onWheel={handleWheel} // Attach mouse wheel event
    >
     
      <Slider {...settings} ref={sliderRef}>
        <div className="carousel-item">
        
          <img
            src="https://www.konceptslab.com/images/bannerbg4.jpg"
            alt="Slide 1"
            className="carousel-image"
          />
        </div>
        <div className="carousel-item">
         
          <img
            src="https://www.konceptslab.com/images/bannerbg1.jpg"
            alt="Slide 2"
            className="carousel-image"
          />
        </div>
        <div className="carousel-item">
        
          <img
            src="https://www.konceptslab.com/images/bannerbg3.jpg"
            alt="Slide 3"
            className="carousel-image"
          />
        </div>
      
      
      </Slider>
    </div>
  );
};

export default Carousel;
