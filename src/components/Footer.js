import React from "react";
import "../styles/Footer.css";
import { GrInstagram, GrTwitter, GrClosedCaption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="logo">
          CarCritique <GrClosedCaption />
        </p>

        <div className="copyright">
          <p>&copy; CarCritique 2024</p>
        </div>
        <div className="footer-info">
          <p>Email: info@carcritique.com</p>
          <p>Follow us on:</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <GrInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <GrTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
