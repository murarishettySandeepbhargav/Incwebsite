import React from "react";
import "./Joinus.css";
const Joinus = () => {
  return (
    <div className="Join">
      <h1>Join Us</h1>
      <div className="Join1">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Our Office Address
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>
                  207, PSR Prime, DLF Cyber City, Gachibowli, Hyderabad,
                  Telanagana.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
