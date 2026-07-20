import React from 'react';
import CherryBlossomTree from './CherryBlossomTree';

function Home() {
  return (
    <div className="home-content">
      <p className="home-lead">
        Hi! I'm Jena, an engineer at{' '}
        <a href="https://www.untillabs.com/" target="_blank" rel="noopener noreferrer">
          Until Labs
        </a>{' '}
        working to build a pause button on biology.
      </p>

      <p>
        Formerly, I worked on software at{' '}
        <a href="https://exa.ai/" target="_blank" rel="noopener noreferrer">Exa</a>,{' '}
        <a href="https://yuzu.health/" target="_blank" rel="noopener noreferrer">Yuzu Health</a>, and{' '}
        <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">Apple</a>.
        I completed my undergraduate studies in computer science at Caltech,
        where I studied early human embryos in the{' '}
        <a href="https://zernickagoetzlab.com/" target="_blank" rel="noopener noreferrer">Zernicka-Goetz Lab</a>.
        I'm interested in control systems, machine learning, and full-stack development.
      </p>

      <CherryBlossomTree />
    </div>
  );
}

export default Home;
