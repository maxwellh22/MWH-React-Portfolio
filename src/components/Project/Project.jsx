import React from "react";
import "./Project.css";

const Project = ({ title, link, image }) => {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noreferrer">
        Visit Project
      </a>
    </div>
  );
};

export default Project;