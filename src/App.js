import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
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
          <div className="subtitle-container">
            <h2>junior @ caltech studying cs + political science</h2>
            <div className="location-line">
              <span role="img" aria-label="pin">📍</span>sf bay area | pasadena, ca | cambridge, uk
            </div>
          </div>
        </div>
      </header>
        <nav>
          <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/projects">projects</NavLink></li>
            <li><NavLink to="/misc">misc</NavLink></li>
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
      <h3>hi, i'm jena. currently:</h3>
      <ul>
        <li>thinking about how to solve poverty, climate, and cities</li>
        <li>learning about ai, full-stack development, and plant-based solutions</li>
        <li>reading <a href="https://www.goodreads.com/book/show/108428.Are_Prisons_Obsolete_" target="_blank" rel="noopener noreferrer">angela davis</a>, <a href="http://www.paulgraham.com/articles.html" target="_blank" rel="noopener noreferrer">paul graham</a>, and <a href="https://www.goodreads.com/book/show/122765395-elon-musk" target="_blank" rel="noopener noreferrer">walter isaacson</a></li>
        <li>blogging and guiding tours @ <a href="https://studentblog.caltech.edu/author/jenaalsup/" target="_blank" rel="noopener noreferrer">caltech admissions</a></li>
        <li>moving @ <a href="https://www.instagram.com/caltechdance/" target="_blank" rel="noopener noreferrer">caltech dance</a></li>
      </ul>
      
      <h3>formerly:</h3>
      <ul>
        <li>building security tools with ai @ <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer">apple</a></li>
        <li>protecting government communications from ai @ <a href="https://www.paragonfellowship.org/" target="_blank" rel="noopener noreferrer">paragon policy fellowship</a></li>
        <li>secretary things (fighting admin) @ <a href="https://sites.google.com/site/arccaltech" target="_blank" rel="noopener noreferrer">caltech arc</a></li>
        <li>investigating corporate climate misinformation @ <a href="https://www.rmichaelalvarez.com/" target="_blank" rel="noopener noreferrer">alvarez lab</a></li>
        <li>researching wildfire evacuations @ <a href="https://fse.fsi.stanford.edu/" target="_blank" rel="noopener noreferrer">stanford fse</a></li>
        <li>scraping sustainable fashion sites @ <a href="https://recurate.com/" target="_blank" rel="noopener noreferrer">recurate</a></li>
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