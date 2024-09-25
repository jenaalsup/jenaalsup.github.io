// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Ensure this file only styles the Projects component

function Projects() {
  return (
    <div className="projects-container">
      <div className="project">
        <h3>Palette Party</h3>
        <p className="project-description">
          Brief description of the project, highlighting its purpose and technologies used.
        </p>
        <div className="project-links">
          <a href="#" className="project-link">project</a>
          <a href="#" className="project-link">code</a>
        </div>
      </div>
      <div className="project">
        <h3>Project Title 2</h3>
        <p className="project-description">
          Brief description of the project, highlighting its purpose and technologies used.
        </p>
        <div className="project-links">
          <a href="#" className="project-link">project</a>
          <a href="#" className="project-link">code</a>
        </div>
      </div>
      <div className="project">
        <h3>Project Title 3</h3>
        <p className="project-description">
          Brief description of the project, highlighting its purpose and technologies used.
        </p>
        <div className="project-links">
          <a href="#" className="project-link">project</a>
          <a href="#" className="project-link">code</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;