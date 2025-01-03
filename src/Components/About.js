import React from "react";

import "./About.css";
import OurProcess from "./OurProcess";
import Glance from "./Glance";
import AssurancesDelivered from "./AssurancesDelivered ";
import StatsCard from "./StartsCard";
import LeaderShip from "./LeaderShip";

// import Pointer from "../Components/Pointer"
const About = () => {
  return (
    <div className="About">
      <div>
        <div className="Abouthead">
          <img
            src="https://d1k5qim9574h9e.cloudfront.net/wp-content/uploads/2023/06/Edtech.jpg"
            alt=""
            className="Aboutimg"
          ></img>
        </div>
        <div className="Aboutinner">
          <p className="Abouttitle">
            We are a passionate team dedicated to delivering innovative
            solutions that empower businesses to thrive in a digital world.
          </p>
        </div>
      </div>

      <OurProcess></OurProcess>
      <Glance></Glance>
      <StatsCard></StatsCard>
      <AssurancesDelivered></AssurancesDelivered>
      <LeaderShip></LeaderShip>
    </div>
  );
};

export default About;
