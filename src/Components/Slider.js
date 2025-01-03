import React, { useRef, useEffect, useState } from "react";
import "./Slide.css";

const Slider = () => {
  const sliderRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const updateCardWidth = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const cardCount = 3; // Total number of cards visible in one view
      setCardWidth(sliderWidth / cardCount);
    }
  };

  useEffect(() => {
    // Update card width on component mount and window resize
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  return (
    <section className="items">
      <div  ref={sliderRef}>
        <div className="slides" style={{ width: `${cardWidth}px` }}>
          <div className="cardss">
            <div className="circle mario"></div>
            <div className="contents">
              <h1>
                Digital <span className="dot">.</span>
              </h1>
              <p>
                Transform your business with our innovative digital solutions.
                From digital transformation and application modernization to
                DevOps and Cybersecurity, we empower your enterprise to thrive
                in the digital age.
              </p>
              <a href="#">View</a>
            </div>
            <video
              src="https://storage.googleapis.com/kl-website-432404.appspot.com/assets//Robo_Animation_Digital_7b3a217489/Robo_Animation_Digital_7b3a217489.webm"
              width="182"
              height="300"
              loading="lazy"
              autoPlay
              loop
              muted
              className="videos"
            />
          </div>
        </div>
        <div className="slides" style={{ width: `${cardWidth}px` }}>
          <div className="cardss">
            <div className="circle sonic"></div>
            <div className="contents">
              <h1>
                AI <span className="dot">.</span>
              </h1>
              <p>
                Leverage the power of AI to drive growth and efficiency. Our
                GenAI, machine learning, and data analytics solutions provide
                actionable insights and automate processes, helping you stay
                ahead in a competitive landscape.
              </p>
              <a href="#">View</a>
            </div>
            <div className="video-container">
              <video
                autoPlay
                loop
                muted
                width="182"
                height="300"
                loading="lazy"
                className="videos"
                src="https://storage.googleapis.com/kl-website-432404.appspot.com/assets//Robo_Animation_AI_0cf5986577/Robo_Animation_AI_0cf5986577.webm"
              />
            </div>
          </div>
        </div>
        <div className="slides" style={{ width: `${cardWidth}px` }}>
          <div className="cardss">
            <div className="circle zelda"></div>
            <div className="contents">
              <h1>
                CX <span className="dot">.</span>
              </h1>
              <p>
                Enhance your customer experience with our comprehensive CX
                services. Our expertise in SEO, social media marketing, content
                marketing, and 2D/3D animation ensures your brand stands out and
                engages effectively with your audience.
              </p>
              <a href="#">View</a>
            </div>
            <div className="video-container">
              <video
                autoPlay
                loop
                muted
                width="182"
                height="300"
                className="videos"
                src="https://storage.googleapis.com/kl-website-432404.appspot.com/assets//Robo_Animation_CX_c843b797a1/Robo_Animation_CX_c843b797a1.webm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
