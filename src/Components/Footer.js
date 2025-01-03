// import React from "react";
// import "./Footer.css";
// import { MdOutlineEmail } from "react-icons/md";
// import { MdOutlineLocalPhone } from "react-icons/md";
// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       <div className="footer-content">
//         {/* Left Section */}
//         <div className="footer-left">
//           <h3>INC Global</h3>
//           <p>
//             At INC Global, we are committed to pioneering innovations that
//             enable intelligent computing across all domains, empowering the
//             world to address its most pressing challenges...
//           </p>
//           <div className="social-links">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <img src="https://www.tresource.in/images/5968764%201.png" alt="Instagram" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <img src="https://www.tresource.in/images/1384063%201.png" alt="Facebook" />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//               <img src="https://www.tresource.in/images/2504923%201.png" alt="LinkedIn" />
//             </a>
//           </div>
//           <br></br>
         
//           <p >
//             <a href="mailto:info@incglobal.pro" className="mail"><MdOutlineEmail /> Email: info@incglobal.pro</a>
//             <br />
//             <a href="tel:+916363617779" className="mail"><MdOutlineLocalPhone /> Phone: +91 6363617779</a>
//           </p>
//         </div>

//         {/* Middle Section */}
//         <div className="footer-middle">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="About">About Us</a></li>
//             <li><a href="Services">Services</a></li>
//             <li><a href="careers">Careers</a></li>
//             <li><a href="Connects">Connects</a></li>
//           </ul>
//         </div>

//         {/* Subscription Section */}
//         <div className="footer-right">
//           <h4>Email Subscriptions</h4>
//           <p>Get the latest INC Global and industry information delivered to your inbox.</p>
//           <button className="subscribe-btn">Subscribe</button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <h3>INC Global</h3>
          <p>
            At INC Global, we are committed to pioneering innovations that
            enable intelligent computing across all domains, empowering the
            world to address its most pressing challenges...
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.tresource.in/images/5968764%201.png" alt="Instagram" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.tresource.in/images/1384063%201.png" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://www.tresource.in/images/2504923%201.png" alt="LinkedIn" />
            </a>
          </div>
          <br></br>
           <p>
              <a href="mailto:info@incglobal.pro" className="contact-link">
                <MdOutlineEmail /> Email: info@incglobal.pro
              </a>
            </p>
            
            <p>
              <a href="tel:+916363617779" className="contact-link">
                <MdOutlineLocalPhone /> Phone: +91 6363617779 ,9966303951
              </a>
            </p>
         
        
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h4>Resources</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="About">About Us</a></li>
            <li><a href="Services">Services</a></li>
            <li><a href="careers">Careers</a></li>
            <li><a href="Connects">Connects</a></li>
          </ul>
          <br></br>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="footer-right">
          <h5>Connect Us</h5>
          <div >
            <div className="address">
              <p>
                <ul>
                  <li>207, PSR Prime, DLF Cyber City, Gachibowli, Hyderabad, Telanagana</li>
                  
                </ul>
              </p>
            </div>
            <div>
      <h4>Email Subscriptions</h4>
      <p>Get the latest INC Global and industry information delivered to your inbox.</p>
      <div className="subscription-container">
        <form
          action="https://formspree.io/f/mannlnjp"
          method="POST"
        >
          <input
            className="subscription-input"
            placeholder="Enter your email"
            name="email"
            type="email"
            
            required
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>
    </div>

           
           
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
