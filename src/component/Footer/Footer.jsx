import React from "react";
import "./Footer.css";
import { FaGraduationCap } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer container-fluid">
      <div className="container footer-content">
        <div className="footer-1">
          <FaGraduationCap size={35} />
          <p>Khadijat Academy</p>
          <div className="vertical"></div>
          <p className="online">online course learning platform</p>
        </div>
        <p className="subscribe">Subscribe to get our Newsletter</p>
        <div className="form">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
        <div className="careers">
          <span>Careers</span>
          <div className="vertical"></div>

          <span>Privacy Policy</span>
          <div className="vertical"></div>

          <span>Terms & Conditions</span>
        </div>
        <div className="khadijat">
          <p>&copy; 2023 Khadijat Academy</p>
        </div>
      </div>
    </div>
  );
}
