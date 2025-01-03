import React from "react";
import resumeImage from "../assets/images/resume.pdf";

const Resume = () => (
    <section className="resume">
    <h2>Resume</h2>
    <div className="resume-preview">
      <embed
        src="src/assets/images/resume.pdf"
        type="application/pdf"
        width="100%"
        height="500px"
      />
    </div>
    <a href="src/assets/images/resume.pdf" download className="download-link">
      Download a copy of my resume here!
    </a>
    <h3>Proficiencies</h3>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>CSS</li>
    </ul>
  </section>
);

export default Resume;