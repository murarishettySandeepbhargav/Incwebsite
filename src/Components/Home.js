import React from "react";
import OurMission from "./OurMission";
import PartnerCarousel from "./PartnerCaroseal";
import WhyShould from "./WhyShould";
import Trending from "./Trending";
import Testimonals from "./Testimonals";
import OurCustomers from "./OurCustomers";
import Welcome from "./Welcome";

import Caro from "./Caro";
import Pointer from "./Pointer";
import DigitalCard from "./DigitalCard";
// import Pointer from "../Components/Pointer"
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home">
        {/* <Pointer></Pointer> */}

        <Caro></Caro>
        <Welcome></Welcome>

        <OurMission></OurMission>
        <DigitalCard></DigitalCard>

        <PartnerCarousel></PartnerCarousel>
        <WhyShould></WhyShould>
        <Trending></Trending>
        <Testimonals></Testimonals>
        <OurCustomers></OurCustomers>
        {/*
         */}
      </div>
    </div>
  );
};

export default Home;
