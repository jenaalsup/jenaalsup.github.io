import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <h1>Jena<span className="bold">Alsup</span></h1>
        <div className="subtitle-container">
          <h2>junior @ caltech studying cs + political science</h2>
          <div className="location-line">
            <span role="img" aria-label="pin">📍</span>sf bay area | pasadena, ca | cambridge, uk
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;