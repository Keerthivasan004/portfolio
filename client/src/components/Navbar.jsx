import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const secs = document.querySelectorAll('section[id]');
      let cur = '';
      secs.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="nav-inner">
          <a href="#home" className="logo">KRV<span>.</span>dev</a>
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''}>{l.label}</a>
              </li>
            ))}
            <li>
              <a className="nav-cta" href={profile.resumeUrl} download>
                Resume
              </a>
            </li>
          </ul>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href={profile.resumeUrl} download onClick={() => setOpen(false)}>
          <Download size={14} style={{ verticalAlign: -2 }} /> Download Resume
        </a>
      </div>
    </>
  );
}
