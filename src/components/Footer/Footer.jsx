import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
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
      <a href="https://youtube.com/channel/@PresidentHurst" target="_blank" rel="noreferrer">
      <FaYoutube />
    </a>
    </footer>
  );
};

export default Footer;