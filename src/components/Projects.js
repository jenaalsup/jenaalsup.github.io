import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Caltech Summer Roomate Finder',
    subtitle: 'Meet other Techers in your city',
    description:
      'Webapp to find summer roommates and friends from Caltech. Built for HackTech 2025 with Next.js, Mapbox, Firebase, MongoDB, Vercel.',
    image: '/images/projects/hacktech.png',
    links: [
      { label: 'project', href: 'https://hacktech-omega.vercel.app/' },
      { label: 'code', href: 'https://github.com/jenaalsup/hacktech' },
    ],
  },
  {
    title: 'Nab',
    subtitle: 'E-thrifting with automatic dynamic pricing',
    description:
      'Peer-to-peer marketplace platform designed specifically for university students to buy and sell items within their campus community. Features an exponential decay pricing algorithm that automatically adjusts listings based on move-out deadlines and real-time market conditions. Built with Next.js, Firebase, and Vercel.',
    image: '/images/projects/nab.png',
    links: [
      { label: 'project', href: 'https://nab-ashy.vercel.app/' },
      { label: 'code', href: 'https://github.com/jenaalsup/nab' },
    ],
  },
  {
    title: 'Palette Party',
    subtitle: 'AI-Powered Color Creation',
    description:
      "A web application that enables users to create, save, and manage their own color palettes. Utilizes generative AI to provide ratings for optimal color combinations. Built with Next.js, TailwindCSS, Firebase, and generative AI (Anthropic's Claude).",
    image: '/images/projects/palette-party.png',
    links: [
      { label: 'project', href: 'https://palette-party-552f4.web.app/' },
      { label: 'code', href: 'https://github.com/jenaalsup/palette-party' },
    ],
  },
  {
    title: 'Eco-mmerce',
    subtitle: 'Marketplace for Sustainable Products',
    description:
      'Created a platform for users to discover and purchase vetted eco-friendly products. Submitted to Equitable Elevation Hacks 2023. Built with Next.js, MongoDB, and Google Authentication.',
    image: '/images/projects/eco-mmerce.png',
    links: [
      { label: 'project', href: 'https://eco-mmerce-seven.vercel.app/' },
      { label: 'code', href: 'https://github.com/jenaalsup/eco-mmerce' },
    ],
  },
  {
    title: 'Compost Share',
    subtitle: 'Find and Share Composting Spots',
    description:
      'Interactive web app which allows users to share, post, and look for local composting stations. Built with React, MongoDB, and the Google Maps API. Won first place at Cal Earth Hacks 2020.',
    image: '/images/projects/compost-share.png',
    links: [
      { label: 'project', href: 'https://compost-share.netlify.app/' },
      { label: 'code', href: 'https://github.com/meiaalsup/compost-share' },
      { label: 'devpost', href: 'https://devpost.com/software/compost-share' },
    ],
  },
  {
    title: 'Populations Impacted by Wildfire Evacuations',
    subtitle: 'Analyzing Evacuation Demographics and Fire Risk Modeling',
    description:
      'Compiled historical evacuation order data and population statistics for wildfire-prone regions in California. Conducted a comparative analysis between observed evacuation zones and census data. Presented findings at the Fall 2021 American Geophysical Union conference.',
    image: '/images/projects/wildfires.png',
    links: [
      { label: 'paper', href: 'https://essopenarchive.org/doi/full/10.1002/essoar.10509549.2' },
      { label: 'code', href: 'https://github.com/sheftneal/wildfire-evacuation' },
    ],
  },
  {
    title: 'Plant Based Teen',
    subtitle: 'Personal Sustainability Blog',
    description:
      'Essays about veganism, sustainability, and environmental justice. Built with Ruby on Rails, PostgreSQL, and Heroku.',
    image: '/images/projects/plant-based-teen.png',
    links: [{ label: 'code', href: 'https://github.com/jenaalsup/personal_blog' }],
  },
  {
    title: 'Super Snazzy Schedule',
    subtitle: 'Scheduling System',
    description:
      'Wellness app for students to maintain a healthy and productive schedule while quarantined. Submitted to Silicon Valley Hacks 2020. Built with Java.',
    image: '/images/projects/super-snazzy-schedule.png',
    links: [{ label: 'code', href: 'https://github.com/jenaalsup/SuperSnazzySchedule' }],
  },
];

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <React.Fragment key={project.title}>
          {index > 0 && <hr className="project-divider" />}
          <div className="project">
            <img
              src={project.image}
              alt=""
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-subtitle">
                <em>{project.subtitle}</em>
              </p>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Projects;
