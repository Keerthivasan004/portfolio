import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useReveal } from './hooks/hooks.js';

const STACK = [
  'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'Jenkins',
  'Prometheus', 'Grafana', 'AWS', 'Azure', 'GCP', 'AKS', 'Python', 'Bash'
];

function Ticker() {
  const row = (key) => (
    <span className="ticker-row" key={key} aria-hidden={key === 1}>
      {STACK.map((s) => (
        <span className="ticker-item" key={`${key}-${s}`}>
          {s} <i>///</i>
        </span>
      ))}
    </span>
  );
  return (
    <div className="ticker" aria-label="Core toolchain">
      <div className="ticker-track">{[row(0), row(1)]}</div>
    </div>
  );
}

export default function App() {
  useReveal();
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Ticker />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
