import React from 'react';
import './OurServices.css'; // Import the external CSS

const OurServices = () => {
  return (
    <section className="section-services">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">
            <div className="header-section">
              <h2 className="title">Exclusive Services</h2>
              <p className="description">
              Innovative Solutions Tailored to Your Needs: Experience the INC Global Advantage.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Service */}
          <div className="col-md-6 col-lg-4">
            <div className="single-services">
              <div className="content">
                <span className="icon">
                  <i className="fab fa-battle-net"></i>
                </span>
                <h3 className="title">GRAPHIC DESIGN</h3>
                <p className="description0">
                
Graphic design for websites focuses on creating visually engaging and user-friendly interfaces. 
                </p>
                <a href="#" className="learn-more">Learn More</a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          {/* / End Single Service */}

          {/* Single Service */}
          <div className="col-md-6 col-lg-4">
            <div className="single-services">
              <div className="content">
                <span className="icon">
                  <i className="fab fa-asymmetrik"></i>
                </span>
                <h3 className="title">PRODUCT DESIGN</h3>
                <p className="description0">
                Product design involves the process of creating and developing physical or digital products 
                </p>
                <a href="#" className="learn-more">Learn More</a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          {/* / End Single Service */}

          {/* Single Service */}
          <div className="col-md-6 col-lg-4">
            <div className="single-services">
              <div className="content">
                <span className="icon">
                  <i className="fab fa-artstation"></i>
                </span>
                <h3 className="title">Software Development</h3>
                <p className="description0">
                Software development is the process of designing, coding, testing, and maintaining applications 
                </p>
                <a href="#" className="learn-more">Learn More</a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          {/* / End Single Service */}

          {/* Single Service */}
          <div className="col-md-6 col-lg-4">
            <div className="single-services">
              <div className="content">
                <span className="icon">
                  <i className="fab fa-500px"></i>
                </span>
                <h3 className="title">BLOG WRITING</h3>
                <p className="description0">
                Blog writing involves creating informative, engaging, and well-researched content on specific topics to share knowledge, opinions, or experiences with an online audience.
                </p>
                <a href="#" className="learn-more">Learn More</a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          {/* / End Single Service */}

          {/* Single Service */}
          <div className="col-md-6 col-lg-4">
            <div className="single-services">
              <div className="content">
                <span className="icon">
                  <i className="fas fa-chart-pie"></i>
                </span>
                <h3 className="title">SOCIAL MARKETING</h3>
                <p className="description0">
                Social marketing is the use of social media platforms to promote products, services, or causes, engaging with audiences to build brand awareness
                </p>
                <a href="#" className="learn-more">Learn More</a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          {/* / End Single Service */}

          {/* Single Service */}
          <div className="col-md-6 col-lg-4">
            <div className="single-services">
              <div className="content">
                <span className="icon">
                  <i className="fas fa-laptop-code"></i>
                </span>
                <h3 className="title">Website Design</h3>
                <p className="description0">
                Website design is the process of planning and creating the layout, structure, and visual elements of a website to ensure it is user-friendly, visually appealing
                </p>
                <a href="#" className="learn-more">Learn More</a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          {/* / End Single Service */}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
