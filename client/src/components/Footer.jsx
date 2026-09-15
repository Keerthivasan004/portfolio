import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot-inner">
        <div className="ft">© 2026 Keerthivasan R V — DevOps & Cloud Engineer</div>
        <a href="#home" className="to-top" aria-label="Back to top"><ArrowUp size={14} aria-hidden="true" /> Back to top</a>
      </div>
    </footer>
  );
}
