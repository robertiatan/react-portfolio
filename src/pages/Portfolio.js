import React from "react";
import "../App.css";
import ProjectCard from "../utils/ProjectCard";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <p>
        This is where I will showcase my past projects along with ones I am currently working on.
      </p>
      <ProjectCard />
    </div>
  );
}
