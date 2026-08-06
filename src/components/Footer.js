import React, { useEffect, useState } from 'react';

function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }).format(new Date())
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <span className="footer-clock">{time} SF</span>
      <div className="footer-links">
        <a href="mailto:jalsup@caltech.edu">/email</a>
        <a href="https://github.com/jenaalsup" target="_blank" rel="noopener noreferrer">/github</a>
        <a href="https://www.linkedin.com/in/jenaalsup" target="_blank" rel="noopener noreferrer">/linkedin</a>
        <a href="https://www.goodreads.com/jenaalsup" target="_blank" rel="noopener noreferrer">/goodreads</a>
      </div>
    </footer>
  );
}

export default Footer;
