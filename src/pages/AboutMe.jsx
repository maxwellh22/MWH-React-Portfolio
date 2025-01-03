import React from "react";
import headshot from "../assets/images/headshot.jpg"

const AboutMe = () => (
  <section className="about-me">
    <img src={headshot} alt="Headshot of Maxwell Hurst" className="headshot" />
    <h2>About Me</h2>
    <p>Welcome to my portfolio! Over the course of my career, I am proud of everything I have built: from companies to web applications. Check out the rest of my portfolio or contact me to learn more!</p>
    </section>
);

export default AboutMe;