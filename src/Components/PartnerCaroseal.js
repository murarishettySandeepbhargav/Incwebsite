import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartnerCarousel.css"; // Custom styles

const PartnerCarousel = () => {
  // Settings for the React Slick slider
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 900,
    slideTransition: 'linear',
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Partner">
      <div className="partner-carousel-container">
        <h2 className="ours">Our Partners</h2>
        <Slider {...settings} className="partner-slider">
          <div className="slide">
            <a href="https://guardiansinfotech.com/" target="_blank" rel="noreferrer"><img
              src="https://guardiansinfotech.com/assets/img/logos/white_rectangle_logo.png"
              alt="Partner 1" className="images"
            /></a>
          </div>
          <div className="slide">
          <a href="https://www.tresource.in/index.php" target="_blank" rel="noreferrer">
          <img
              src="https://www.tresource.in/images/logo_Tr.png"
              alt="Partner 2" className="images"
            />
          </a>
          </div>
          <div className="slide">
           <a href="https://www.ninesoftech.com/" target="_blank" rel="noreferrer">
           <img
              src="https://media.licdn.com/dms/image/v2/D560BAQGvdgzuJRMggA/company-logo_200_200/company-logo_200_200/0/1725293538522/ninesoftechorg_logo?e=1743033600&v=beta&t=C-BixRZ_Q4I1MH2eM4LEPz1DObIVQEWecTszYZIkNZE"
              alt="Partner 3" className="images"
            />
           </a>
          </div>
          {/* <div className="slide">
            <img
              src=""
              alt="Partner 4" className="images"
            />
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerCarousel;
