import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/footor.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>Made For Kings and Queens</p>
        <div className="keywords">
          <span>Classic Beverages</span>
          <span>Site Feedback</span>
          <span>Contact Us</span>
          <span>Terms & Conditions</span>
        </div>
      </div>

      <div className="social-icons">
        <span>Connect with us:</span>
        <p className="social-link">
          <FontAwesomeIcon icon={faInstagram} />
        </p>
        <p className="social-link">
          <FontAwesomeIcon icon={faTwitter} />
        </p>
        <p className="social-link">
          <FontAwesomeIcon icon={faDiscord} />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
