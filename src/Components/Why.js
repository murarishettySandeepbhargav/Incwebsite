import React from 'react';
import "./Why.css"
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaHandHoldingHeart />,
      title: "Locally Owned and Operated",
      description: "A fixture in our community, dedicated to serving our neighbors since 2013."
    },
    {
      icon: "💡",
      title: "Innovative Solutions",
      description: "Get the best equipment to meet your family’s needs and comfort demands."
    },
    {
      icon: "🚚",
      title: "Satisfaction Guarantee",
      description: "Our job isn’t complete until you are fully satisfied with our work, guaranteed."
    },
    {
      icon: <FaAward />,
      title: "Award-Winning Service",
      description: "Our highly skilled technicians deliver award-winning service on all jobs, big and small."
    }
  ];

  return (
    <div className="why-choose-us">
      <h2>  Why you should partner with<br></br> Inc Global</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icons">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p style={{fontWeight:'500',color:"black"}}>{feature.description} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
