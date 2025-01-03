import React, { useState } from "react";
import "./Glance.css";
import Mission from "./Mission";
import Vission from "./Vission";
import Values from "./Values";
import "./Glance.css";
const ComponentOne = () => {
  return <Mission></Mission>;
};

const ComponentTwo = () => {
  return <Vission></Vission>;
};

const ComponentThree = () => {
  return (
    <div>
      <Values></Values>
    </div>
  );
};

const Glance = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case "one":
        return <ComponentOne />;
      case "two":
        return <ComponentTwo />;
      case "three":
        return <ComponentThree />;
      default:
        return <div></div>;
    }
  };

  return (
    <div>
      <h1 className="Glances"> Inc Global Glance</h1>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <div>
          <button
            onMouseEnter={() => setActiveComponent("one")}
            className="buttonStyle"
          >
            Mission
          </button>
          <button
            onMouseEnter={() => setActiveComponent("two")}
            className="buttonStyle"
          >
            Vission
          </button>
          <button
            onMouseEnter={() => setActiveComponent("three")}
            className="buttonStyle"
          >
            Values and ethics
          </button>
        </div>
        <div
          style={{
            marginTop: "20px",

            padding: "10px",
          }}
        >
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Glance;
