import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoodreads, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUtensils } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer>
      <a href="mailto:jalsup@caltech.edu">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://github.com/jenaalsup" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a> 
      <a href="https://www.linkedin.com/in/jenaalsup" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.goodreads.com/jenaalsup" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGoodreads} />
      </a>
      <a href="https://medium.com/@jena.alsup" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faMedium} />
      </a>
      <a href="https://beliapp.co/app/jenaalsup" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faUtensils} />
      </a>
    </footer>
  );
}

export default Footer;