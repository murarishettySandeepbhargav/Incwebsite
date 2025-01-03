import React from "react";
import "./Connects.css";
import ContactForm from "./ContactForm";

const Connects = () => {
  return (
    <div>
      <div>
        <div className="Connecthead">
          {" "}
          <img
            src="https://d1k5qim9574h9e.cloudfront.net/wp-content/uploads/2023/06/valuelabs-our-work.jpg"
            alt=""
            className="Connectimg"
          ></img>
        </div>
        <div className="Connectinner">
          <h1 className="Connecttitle">Why Inc Global</h1>
          <p className="Connectpara">
            {" "}
            Providing comprehensive support from strategy development to
            execution.
          </p>
        </div>
      </div>
      <div className="connects-container">
        <div className="connect-title">
          <h1 className="connect">Let’s Get Connected</h1>
        </div>
        <div className="labs-description">
          <p>
            Inc Global operates at the bleeding edge of AI, Data, Customer
            Experience (CX), and Platforms. We help enterprises rethink
            technology transformation, redefine processes, and thereby reimagine
            business models to create new performance frontiers.
          </p>
        </div>
        <div className="locations-and-form">
          <div className="locations">
            <div className="location thrissur">
              <h1>Hyderabad</h1>
              <p className="locate">
                207, PSR Prime, DLF Cyber City, Gachibowli, Hyderabad,
                Telanagana Plot no 24-25, 201/2nd floor, Platinum Plaza,
                Vijay Nagar, Indore.
              </p>
              <span>Contact:</span>
              <p className="contact-number">6363617779, 9966303951</p>
              <p className="contact-number"></p>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connects;
