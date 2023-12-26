import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram_icon.png";
import whatsApp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-socail-icons">
        <div className="footer-icons-container">
          <img src={instagram} alt="instagram-logo" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsApp} alt="whatsApp-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
