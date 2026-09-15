import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot-inner">
        <div className="ft"><span className="dot-live" aria-hidden="true" /> <span>© 2026 <strong>Keerthivasan R V</strong> — DevOps & Cloud Engineer</span></div>
        <div className="ft">React + Node.js · Deployed on Vercel</div>
        <a href="#home" className="to-top" aria-label="Back to top"><ArrowUp size={14} aria-hidden="true" /> Top</a>
      </div>
    </footer>
  );
}
