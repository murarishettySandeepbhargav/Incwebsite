import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CaseStudy.css"; // Import the external CSS for styling

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const blogs = [
    {
      title: "Confused by Cloud Choices?",
      description:
        "The cloud revolution has reshaped how bus data storage to AWS, Azure, and Google Cloud, let us guide you to the perfect cloud services for your business.",
      buttonText: "Read more",
      image:
        "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//KL_NOV_24_P7wide_3692deea1a/KL_NOV_24_P7wide_3692deea1a.png", // Replace with your image URL
    },
    {
      title: "Finding the Best eCommerce Platform",
      description:
        "In the rapidly evolving world of ecommerce, choosing the best eCommerce platform can make or break your online business. WooCommerce, Magento, and ",
      buttonText: "Read more",
      image:
        "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//KL_NOV_24_P3_Blog_Size_46a0c94e68/KL_NOV_24_P3_Blog_Size_46a0c94e68.png", // Replace with your image URL
    },
    {
      title: "Which CMS Suits Me Better?",
      description:
        "In the rapidly evolving world of ecommerce, choosing the best eCommerce platform can make or break your online business. WooCommerce, Magento, and ",
      buttonText: "Read more",
      image:
        "https://storage.googleapis.com/kl-website-432404.appspot.com/assets//KL_OCT_24_B1_Blog_Size_1_1_df43631a3c/KL_OCT_24_B1_Blog_Size_1_1_df43631a3c.png", // Replace with your image URL
    },
  ];

  return (
    <div className="carousel-containerS">
      <h1>CaseStudy</h1>
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div className="blog-card-containerS" key={index}>
            <div className="cardS">
              <img src={blog.image} alt={blog.title} className="card-imageS" />
              <div className="card-contentS">
                <h2 className="card-titleS">{blog.title}</h2>
                <p className="card-descriptionS">{blog.description}</p>
                <button className="card-btnS">{blog.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = ({ className, onClick }) => {
  return (
    <div
    
      onClick={onClick}
      className="slick-arrow slick-next" // Add class for custom styling
    />
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <div
      
      onClick={onClick}
      className="slick-arrow slick-prev" // Add class for custom styling
    />
  );
};

export default Blog;
