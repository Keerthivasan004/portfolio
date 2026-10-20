import { ArrowUp, Linkedin, Github, FileDown } from 'lucide-react';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot-inner">
        <div className="ft">© 2026 Keerthivasan R V — DevOps &amp; Cloud Engineer</div>
        <div className="foot-social" aria-label="Social links">
          <a className="social-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={16} aria-hidden="true" />
          </a>
          <a className="social-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={16} aria-hidden="true" />
          </a>
          <a className="social-btn" href={profile.resumeUrl} download aria-label="Download resume">
            <FileDown size={16} aria-hidden="true" />
          </a>
        </div>
        <a href="#home" className="to-top" aria-label="Back to top"><ArrowUp size={14} aria-hidden="true" /> Back to top</a>
      </div>
    </footer>
  );
}
