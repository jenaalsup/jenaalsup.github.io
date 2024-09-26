import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className="project">
        <h3>Palette Party</h3>
        <p className="project-subtitle"><em>AI-Powered Color Creation</em></p>
        <p className="project-description">
          A web application that enables users to create, save, and manage their own color palettes. Utilizes generative AI to provide ratings for optimal color combinations. Built with Next.js, TailwindCSS, Firebase, and generative AI (Anthropic's Claude).
        </p>
        <div className="project-links">
          <a href="https://palette-party-552f4.web.app/" className="project-link" target="_blank" rel="noopener noreferrer">project</a>
          <a href="https://github.com/jenaalsup/palette-party" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Eco-mmerce</h3>
        <p className="project-subtitle"><em>Marketplace for Sustainable Products</em></p>
        <p className="project-description">
          Created a platform for users to discover and purchase vetted eco-friendly products. Built with Next.js, MongoDB, and Google Authentication.
        </p>
        <div className="project-links">
          <a href="https://eco-mmerce-seven.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">project</a>
          <a href="https://github.com/jenaalsup/eco-mmerce" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Compost Share</h3>
        <p className="project-subtitle"><em>Find and Share Composting Spots</em></p>
        <p className="project-description">
          Interactive web app which allows users to share, post, and look for local composting stations. Built with React, MongoDB, and the Google Maps API.
        </p>
        <div className="project-links">
          <a href="https://compost-share.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">project</a>
          <a href="https://github.com/meiaalsup/compost-share" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
          <a href="https://devpost.com/software/compost-share" className="project-link" target="_blank" rel="noopener noreferrer">devpost</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Populations Impacted by Wildfire Evacuations</h3>
        <p className="project-subtitle"><em>Analyzing Evacuation Demographics and Fire Risk Modeling</em></p>
        <p className="project-description">
          Compiled historical evacuation order data and population statistics for wildfire-prone regions in California.
          Conducted a comparative analysis between observed evacuation zones and census data. 
          Presented findings at the Fall 2021 American Geophysical Union conference.
        </p>
        <div className="project-links">
          <a href="https://essopenarchive.org/doi/full/10.1002/essoar.10509549.2" className="project-link" target="_blank" rel="noopener noreferrer">paper</a>
          <a href="https://github.com/sheftneal/wildfire-evacuation" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Plant Based Teen</h3>
        <p className="project-subtitle"><em>Personal Sustainability Blog</em></p>
        <p className="project-description">
          Essays about veganism, sustainability, and environmental justice. Built with Ruby on Rails, PostgreSQL, and Heroku.
        </p>
        <div className="project-links">
          <a href="https://github.com/jenaalsup/personal_blog" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
      <hr />
      <div className="project">
        <h3>Super Snazzy Schedule</h3>
        <p className="project-subtitle"><em>Scheduling System</em></p>
        <p className="project-description">
          Wellness app for students to maintain a healthy and productive schedule while quarantined. Submitted to Silicon Valley Hacks 2020. Built with Java.
        </p>
        <div className="project-links">
          <a href="https://github.com/jenaalsup/SuperSnazzySchedule" className="project-link" target="_blank" rel="noopener noreferrer">code</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;