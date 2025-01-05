import React from "react";
import Slider from "react-slick";
import "@fortawesome/fontawesome-free/css/all.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Welcome.css"; // Custom CSS

const Welcome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,
    draggable: false,
    prevArrow: (
      <div className="custom-arrow prev-arrow">
        <i className="fas fa-chevron-left"></i> {/* Left arrow icon */}
      </div>
    ),
    nextArrow: (
      <div className="custom-arrow next-arrow">
        <i className="fas fa-chevron-right"></i> {/* Right arrow icon */}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          draggable: true,
         
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          draggable: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          draggable: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
          arrows: false,
        },
      },
    ],
  };

  const cards = [
    {
      id: 1,
      img: "https://s7d1.scene7.com/is/image/dmqualcommprod/women-and-dog-at-sea?fmt=webp-alpha&qlt=85&wid=1800&fit=fit,1",
      title: "Ai",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/7860852/pexels-photo-7860852.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Automation",
    },
    {
      id: 3,
      img: "https://s7d1.scene7.com/is/image/dmqualcommprod/xr-vr-electronic?fmt=webp-alpha&qlt=85&wid=1800&fit=fit,1",
      title: "Xr/Vr",
    },
    {
      id: 4,
      img: "https://s7d1.scene7.com/is/image/dmqualcommprod/laptop-homepage-carousel?fmt=webp-alpha&qlt=85&wid=1800&fit=fit,1",
      title: "Laptop",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/9130512/pexels-photo-9130512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Audio",
    },
  ];

  return (
    <div className="welcome">
      <div className="welcome-banner-container">
        <h1 className="welcome-banner-title">Welcome to INC Global</h1>
        <p className="welcome-banner-subtitle">
          Discover our diverse range of<br></br> offerings and resources.
        </p>
      </div>
      <div className="card-slider-container">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="cards">
              <img
                className="card-img-top"
                src={card.img }
                alt={card.title}
              />
              <div className="card-bodys">
                <p className="card-text">
                  <h4 className="card-title">{card.title}</h4>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Welcome;
