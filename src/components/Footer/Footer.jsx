import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/your-profile" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/your-profile" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </footer>
  );
};

export default Footer;