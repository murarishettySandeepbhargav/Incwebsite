import React from "react";
import "./OurCustomers.css"
const OurCustomers = () => {
  return (
    <div>
      <h1 className="cherish">We Cherish Our Customers</h1>
      <div className="customermain">
        <a href="https://timespacemedia.com/" target="_blank" rel="noreferrer">
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQHPXfx8OmMAxw/company-logo_200_200/company-logo_200_200/0/1686823786349?e=1743033600&v=beta&t=qwAEngdKKV6XpU44n83PM7rU2elPfSKRXmxnCY_I2oE"
            alt="hi"
            className="customerimg"
          ></img>
        </a>
        <a href="https://www.quantumpackagingnig.com/" target="_blank" rel="noreferrer">
          <img
            src="https://www.quantumpackagingnig.com/assets/imgs/logo-packaging.png"
            alt="hi"
            className="customerimg"
          ></img>
        </a>
        <a href="https://www.mahabharatfoundation.com/gallery.html" target="_blank" rel="noreferrer">
          <img
            src="https://www.mahabharatfoundation.com/images/image1.png"
            alt="hi"
            className="customerimg"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default OurCustomers;
