import React from "react";
import "./Project.css";

const Project = ({ title, link }) => {
    return (
      <div className="project">
        <h3>{title}</h3>
        <a href={link} target="_blank" rel="noreferrer">
          Visit Project
        </a>
      </div>
    );
  };

export default Project;