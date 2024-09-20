import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoodreads, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Jena<span className="bold">Alsup</span></h1>
          <h2>junior @ caltech studying cs + political science</h2>
          <div className="location-line">
            <span role="img" aria-label="pin">📍</span> sf bay area | pasadena, ca | cambridge, uk
          </div>
        </div>
      </header>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/misc">misc</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/misc" element={<Misc />} />
          </Routes>
        </main>
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
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-content">
      <h2>hi, i'm jena.</h2>
      <h2>currently:</h2>
      <ul>
        <li>thinking about how to solve poverty, climate, and cities</li>
        <li>learning about ai, full-stack development, and shifting the world towards plant-based solutions</li>
        <li>reading angela davis, paul graham, and walter isaacson</li>
        <li>blogging and guiding tours @ caltech admissions</li>
        <li>moving @ caltech dance</li>
      </ul>
      
      <h2>formerly:</h2>
      <ul>
        <li>building security tools with ai @ apple</li>
        <li>researching ai policy @ paragon policy fellowship</li>
        <li>secretary things @ caltech academics and research committee</li>
        <li>advocating for education equity @ association of independent california colleges and universities</li>
        <li>investigating corporate climate misinformation @ caltech alvarez lab</li>
        <li>researching wildfire evacuations @ stanford center on food security and the environment</li>
        <li>scraping sustainable fashion sites @ recurate</li>
      </ul>
    </div>
  );
}

function Projects() {
  return <h2>in progress lol</h2>;
}

function Misc() {
  return <h2>in progress lol</h2>;
}

export default App;