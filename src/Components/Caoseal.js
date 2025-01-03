// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Mousewheel } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "./Caroseal.css"; // Include your custom styles if neede
// import Inc1 from "../Images/Incglobal1.jpg";
// import Inc2 from "../Images/Incglobal2.jpg";
// import Inc3 from "../Images/IncGlobal3.jpg";

// const Caoseal = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Mousewheel]}
//       loop={true}
//       mousewheel={true}
//       navigation={{
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       }}
//       breakpoints={{
//         640: {
//           direction: "vertical",
//           loop: false,
//         },
//       }}
//       className="swiper-container"
//     >
//       <SwiperSlide>
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/039/611/780/non_2x/circuit-board-texture-with-wave-flow-digital-data-and-electronic-engineering-network-connection-and-communication-technology-banner-background-illustration-vector.jpg"
//           alt="Slide 1"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={Inc2} alt="Slide 2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={Inc3} alt="Slide 3" />
//       </SwiperSlide>

//       {/* Navigation buttons */}
//       <div className="swiper-button-prev"></div>
//       <div className="swiper-button-next"></div>
//     </Swiper>
//   );
// };

// export default Caoseal;
import React from "react";
import "./Caroseal.css";
const Caoseal = () => {
  return (
    <div>
      <div className="Carosealmain">
        <img
          src="https://static.vecteezy.com/system/resources/previews/041/920/521/non_2x/electronic-circuit-board-on-dark-blue-for-high-digital-technology-digital-connect-communication-science-and-technology-concept-background-illustration-vector.jpg"
          className="Carosealimg"
          alt="Software Development"
        />
        <div className="Caroseal2">
          <h1 className="Carosealhead">Welcome to Inc Global</h1>
          <h6 className="Carosealpara">
          Lead the Change: Experience the Future with INC Global.
          </h6>
          <a>
            <button className="Carosealbtn">Read more </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Caoseal;
