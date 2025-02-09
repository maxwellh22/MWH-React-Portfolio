import React from "react";
import Project from "../components/Project/Project";

import podcastImage from "../assets/images/ResilientFounders.png";
import forbesImage from "../assets/images/F30U30FD.png";
import keynoteImage from "../assets/images/Top-Scholars.png";
import smallBizImage from "../assets/images/UNC-KF-Article.png";
import studentHubImage from "../assets/images/1789-Promo-Video";

const projects = [
  {
    title: "Interview on Resilient Founders Podcast",
    link: "https://youtu.be/v3yP8BRNjA4?si=FriMHPHqjET8UhTa",
    image: podcastImage,
  },
  {
    title: "Company honored in Forbes 30 Under 30: Food & Drink 2024",
    link: "https://www.forbes.com/30-under-30/2024/food-drink",
    image: forbesImage,
  },
  {
    title: "Keynote Speaker at BCS 2024 Top Scholars Dinner",
    link: "https://www.buncombeschools.org/article/1567375",
    image: keynoteImage,
  },
  {
    title: "Featured in article about small businesses by UNC KF",
    link: "https://www.kenan-flagler.unc.edu/news/small-and-mighty/",
    image: smallBizImage,
  },
  {
    title: "Featured in 1789 Student Innovation Hub Promo Video",
    link: "https://m.youtube.com/watch?v=VpJMYSqjIx4",
    image: studentHubImage,
  },
];

const Portfolio = () => (
  <section className="portfolio">
    <h2>Portfolio</h2>
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <Project key={index} title={project.title} link={project.link} image={project.image} />
      ))}
    </div>
  </section>
);

export default Portfolio;