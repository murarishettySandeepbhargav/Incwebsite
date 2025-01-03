import React from "react";
import "./LeaderShip.css"; // Make sure to import your CSS file

const Team = () => {
  return (
    <div className="team">
      <div className="leadership">
        <h1>Our LeaderShip</h1>
      </div>
      <div className="container">
        <div className="row">
          {/* Single Team Member */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team__item set-bg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')",
              }}
            >
              <div className="team__text">
                <div className="team__title">
                  <h4>Furkan Giray</h4>
                  <span>Web Developer</span>
                </div>
                <p>
                  Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
                  consectetur. Ut viverra porta leo, non tincidunt mauris
                  condimentum eget. Vivamus non turpis elit. Aenean ultricies
                  nisl sit amet.
                </p>
          
              </div>
            </div>
          </div>

          {/* Repeat for other team members */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team__item set-bg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')",
              }}
            >
              <div className="team__text">
                <div className="team__title">
                  <h4>Furkan Giray</h4>
                  <span>Web Developer</span>
                </div>
                <p>
                  Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
                  consectetur. Ut viverra porta leo, non tincidunt mauris
                  condimentum eget. Vivamus non turpis elit. Aenean ultricies
                  nisl sit amet.
                </p>
            
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div
              className="team__item set-bg"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')",
              }}
            >
              <div className="team__text">
                <div className="team__title">
                  <h4>Furkan Giray</h4>
                  <span>Web Developer</span>
                </div>
                <p>
                  Vestibulum dapibus odio quam, sit amet hendrerit dui ultricies
                  consectetur. Ut viverra porta leo, non tincidunt mauris
                  condimentum eget. Vivamus non turpis elit. Aenean ultricies
                  nisl sit amet.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
