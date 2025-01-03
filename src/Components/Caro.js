import React, { useEffect } from "react";
import { Link, Element } from "react-scroll";
import "./Caro.css"; // Your CSS file

function App() {
  useEffect(() => {
    // Scroll to the element in the URL's hash on load (if any)
    if (window.location.hash) {
      const elem = document.querySelector(window.location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      <Element name="section1">
        <section className="section">
          <div className="Head1">
            <img
              src="https://www.konceptslab.com/images/bannerbg3.jpg"
              alt="Banner 1"
              className="carohead"
            />
          </div>
          <div className="Head2">
            <h1 className="Carosealhead1">
              INC Global-Technology & Innovation
            </h1>
            <h4 className="Carosealpara">
              INC Global Technology & Innovation using Automation | GenAI | IOT
              | Deep Learning
            </h4>
          </div>
        </section>
      </Element>
      {/* <Element name="section2">
        <section className="section">
          <div className="Head3">
            <img
              src="https://www.konceptslab.com/images/bannerbg4.jpg"
              alt="Banner 2"
            />
          </div>
          <div className="Head4">
            <h1 className="Carosealhead2">The Future is AI</h1>
            <h4 className="Carosealpara3">
              Transforming how businesses operate and grow through the power of
              artificial intelligence. We help you revolutionize your
              operations, customer interactions, and growth trajectory.
            </h4>
          </div>
        </section>
      </Element>
      <Element name="section3">
        <section className="section">
          <div className="Head5">
            <img
              src="https://www.konceptslab.com/images/bannerbg1.jpg"
              alt="Banner 3"
            />
          </div>
          <div className="Head6">
            <h1 className="Carosealhead4">Agile Teams, Unmatched Expertise</h1>
            <h4 className="Carosealpara5">
              Boost your projects with our efficient staff augmentation
              services. Delivering expert individuals or entire agile teams so
              that you have the right talent at the right time.
            </h4>
          </div>
        </section>
      </Element> */}
      {/* Uncomment and add content for additional sections if needed */}
    </div>
  );
}

export default App;
