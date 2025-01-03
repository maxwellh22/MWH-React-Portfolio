import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/maxwellh22" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/maxwellhurst" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    </footer>
  );
};

export default Footer;